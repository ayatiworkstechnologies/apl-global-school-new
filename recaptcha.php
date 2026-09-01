<?php

declare(strict_types=1);

/**
 * Verify a Google reCAPTCHA v3 token and its request context.
 *
 * @return array{success: bool, message: string, score?: float}
 */
function verifyRecaptchaV3(
    string $token,
    string $expectedAction,
    float $minimumScore = 0.5
): array {
    if ($token === '') {
        return [
            'success' => false,
            'message' => 'Security verification token is missing.',
        ];
    }

    $secret = defined('RECAPTCHA_SECRET_KEY')
        ? (string) RECAPTCHA_SECRET_KEY
        : (string) (getenv('RECAPTCHA_SECRET_KEY') ?: '');

    if ($secret === '') {
        error_log('APL reCAPTCHA Error: RECAPTCHA_SECRET_KEY is not configured.');

        return [
            'success' => false,
            'message' => 'Security verification is temporarily unavailable.',
        ];
    }

    if (!function_exists('curl_init')) {
        error_log('APL reCAPTCHA Error: PHP cURL extension is unavailable.');

        return [
            'success' => false,
            'message' => 'Security verification is temporarily unavailable.',
        ];
    }

    $request = curl_init('https://www.google.com/recaptcha/api/siteverify');

    if ($request === false) {
        return [
            'success' => false,
            'message' => 'Security verification is temporarily unavailable.',
        ];
    }

    curl_setopt_array($request, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => $secret,
            'response' => $token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => [
            'Accept: application/json',
            'Content-Type: application/x-www-form-urlencoded',
        ],
    ]);

    $responseBody = curl_exec($request);
    $curlError = curl_error($request);
    $httpStatus = (int) curl_getinfo($request, CURLINFO_HTTP_CODE);
    curl_close($request);

    if ($responseBody === false || $httpStatus !== 200) {
        error_log(
            'APL reCAPTCHA request failed. HTTP ' . $httpStatus
            . ($curlError !== '' ? ': ' . $curlError : '')
        );

        return [
            'success' => false,
            'message' => 'Security verification is temporarily unavailable.',
        ];
    }

    $result = json_decode((string) $responseBody, true);

    if (!is_array($result) || empty($result['success'])) {
        $errorCodes = is_array($result) && isset($result['error-codes'])
            ? implode(', ', (array) $result['error-codes'])
            : 'invalid response';

        error_log('APL reCAPTCHA rejected token: ' . $errorCodes);

        return [
            'success' => false,
            'message' => 'Security verification failed. Please try again.',
        ];
    }

    $action = (string) ($result['action'] ?? '');
    if (!hash_equals($expectedAction, $action)) {
        error_log(
            'APL reCAPTCHA action mismatch. Expected '
            . $expectedAction . ', received ' . $action
        );

        return [
            'success' => false,
            'message' => 'Security verification failed. Please try again.',
        ];
    }

    $allowedHostnames = [
        'www.aplglobalschool.com',
        'aplglobalschool.com',
        'localhost',
    ];
    $hostname = strtolower((string) ($result['hostname'] ?? ''));

    if (!in_array($hostname, $allowedHostnames, true)) {
        error_log('APL reCAPTCHA hostname mismatch: ' . $hostname);

        return [
            'success' => false,
            'message' => 'Security verification failed. Please try again.',
        ];
    }

    $score = isset($result['score']) ? (float) $result['score'] : 0.0;
    if ($score < $minimumScore) {
        error_log('APL reCAPTCHA score rejected: ' . $score);

        return [
            'success' => false,
            'message' => 'Security verification failed. Please try again.',
            'score' => $score,
        ];
    }

    return [
        'success' => true,
        'message' => 'Security verification passed.',
        'score' => $score,
    ];
}
