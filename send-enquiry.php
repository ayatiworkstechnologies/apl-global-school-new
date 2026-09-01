<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

ini_set('display_errors', '0');
error_reporting(E_ALL);

function sendJson(int $statusCode, string $status, string $message): void
{
    http_response_code($statusCode);
    echo json_encode([
        'status' => $status,
        'message' => $message,
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

$allowedOrigins = [
    'https://www.aplglobalschool.com',
    'https://aplglobalschool.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Accept');
header('Content-Type: application/json; charset=UTF-8');

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? '';

if ($requestMethod === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($requestMethod !== 'POST') {
    header('Allow: POST, OPTIONS');
    sendJson(405, 'error', 'Invalid request method.');
}

try {
    require_once __DIR__ . '/conn.php';
    require_once __DIR__ . '/recaptcha.php';

    $configFile = __DIR__ . '/apl-config.php';
    if (is_file($configFile)) {
        require_once $configFile;
    }

    require_once __DIR__ . '/mailer/Exception.php';
    require_once __DIR__ . '/mailer/PHPMailer.php';
    require_once __DIR__ . '/mailer/SMTP.php';
} catch (Throwable $error) {
    error_log('APL Enquiry bootstrap error: ' . $error->getMessage());
    sendJson(500, 'error', 'The enquiry service is temporarily unavailable.');
}

if (!isset($conn) || !($conn instanceof mysqli)) {
    error_log('APL Enquiry DB Error: conn.php did not create a mysqli connection.');
    sendJson(500, 'error', 'The enquiry service is temporarily unavailable.');
}

$rawBody = file_get_contents('php://input');
$input = json_decode($rawBody === false ? '' : $rawBody, true);

if (!is_array($input)) {
    $input = $_POST;
}

$parentName = trim((string) ($input['parentName'] ?? ''));
$studentName = trim((string) ($input['studentName'] ?? ''));
$applyFor = trim((string) ($input['applyFor'] ?? ''));
$grade = trim((string) ($input['grade'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$recaptchaToken = trim((string) ($input['recaptchaToken'] ?? ''));

if (
    $parentName === '' ||
    $studentName === '' ||
    $applyFor === '' ||
    $grade === '' ||
    $email === '' ||
    $phone === '' ||
    $recaptchaToken === ''
) {
    sendJson(400, 'error', 'All fields and security verification are required.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJson(400, 'error', 'Please enter a valid email address.');
}

if (!preg_match('/^[0-9]{10}$/', $phone)) {
    sendJson(400, 'error', 'Please enter a valid 10-digit phone number.');
}

try {
    $recaptchaResult = verifyRecaptchaV3(
        $recaptchaToken,
        'enquiry_form',
        0.5
    );
} catch (Throwable $error) {
    error_log('APL Enquiry reCAPTCHA Error: ' . $error->getMessage());
    sendJson(503, 'error', 'Security verification is temporarily unavailable.');
}

if (!is_array($recaptchaResult) || empty($recaptchaResult['success'])) {
    $message = is_array($recaptchaResult)
        ? (string) ($recaptchaResult['message'] ?? 'Security verification failed.')
        : 'Security verification failed.';

    sendJson(403, 'error', $message);
}

try {
    $databaseMessage = "Student Name: {$studentName}\n"
        . "Applying For: {$applyFor}\n"
        . "Grade: {$grade}";

    $stmt = $conn->prepare(
        'INSERT INTO enquiries
            (name, email, mobile, message, created_at)
         VALUES (?, ?, ?, ?, NOW())'
    );

    if (!$stmt) {
        throw new RuntimeException('Unable to prepare database query: ' . $conn->error);
    }

    $stmt->bind_param(
        'ssss',
        $parentName,
        $email,
        $phone,
        $databaseMessage
    );

    if (!$stmt->execute()) {
        throw new RuntimeException('Unable to execute database query: ' . $stmt->error);
    }

    $stmt->close();
} catch (Throwable $error) {
    error_log('APL Enquiry DB Error: ' . $error->getMessage());
    $conn->close();
    sendJson(500, 'error', 'Unable to save enquiry.');
}

$escape = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$safeParentName = $escape($parentName);
$safeStudentName = $escape($studentName);
$safeApplyFor = $escape($applyFor);
$safeGrade = $escape($grade);
$safeEmail = $escape($email);
$safePhone = $escape($phone);

$body = <<<HTML
<div style="text-align:center">
    <img src="https://www.aplglobalschool.com/logo.png"
         alt="APL Global School"
         style="height:60px;margin-bottom:10px">
</div>
<table cellpadding="10" style="border-collapse:collapse;border:1px solid #eee;width:500px;max-width:100%;margin:0 auto;font:14px Arial,sans-serif">
    <tr><th colspan="2" style="background:#fafafa">Admission Enquiry Details</th></tr>
    <tr><td><strong>Parent Name:</strong></td><td>{$safeParentName}</td></tr>
    <tr><td><strong>Student Name:</strong></td><td>{$safeStudentName}</td></tr>
    <tr><td><strong>Applying For:</strong></td><td>{$safeApplyFor}</td></tr>
    <tr><td><strong>Grade:</strong></td><td>{$safeGrade}</td></tr>
    <tr><td><strong>Email:</strong></td><td>{$safeEmail}</td></tr>
    <tr><td><strong>Phone:</strong></td><td>{$safePhone}</td></tr>
</table>
<p style="font:12px Arial,sans-serif;color:#888;text-align:center;margin-top:20px">
    This enquiry was submitted through the <strong>APL Global School</strong> website.
</p>
HTML;

try {
    if (!defined('SMTP_USERNAME') || !defined('SMTP_PASSWORD')) {
        throw new RuntimeException('SMTP_USERNAME or SMTP_PASSWORD is not configured.');
    }

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'mail.ayatiworks.com';
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->Timeout = 15;

    $mail->setFrom(SMTP_USERNAME, 'APL Global School Enquiry Form');
    $mail->addAddress('admission@apl.edu.in');
    $mail->addReplyTo($email, $parentName);
    $mail->isHTML(true);
    $mail->Subject = 'Admission Enquiry - ' . $studentName . ' (' . $applyFor . ')';
    $mail->Body = $body;
    $mail->AltBody = "Admission Enquiry\n"
        . "Parent: {$parentName}\n"
        . "Student: {$studentName}\n"
        . "Applying for: {$applyFor}\n"
        . "Grade: {$grade}\n"
        . "Email: {$email}\n"
        . "Phone: {$phone}";
    $mail->send();
} catch (Throwable $error) {
    $details = isset($mail) && $mail->ErrorInfo !== ''
        ? $mail->ErrorInfo
        : $error->getMessage();

    error_log('APL Enquiry Mail Error: ' . $details);
    $conn->close();

    // The enquiry is already safely stored. Returning 500 here would invite
    // duplicate submissions when the user retries.
    sendJson(
        200,
        'success',
        'Your enquiry was saved. Email notification is temporarily delayed.'
    );
}

$conn->close();
sendJson(200, 'success', 'Form submitted successfully and email sent.');
