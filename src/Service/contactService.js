// emailService.js
import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_357swf9', // Replace with your EmailJS service ID
      'template_onr3sbp', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        schoolLevel: formData.schoolLevel
      },
      'lyrxl0fuid6bH-l6J' // Replace with your EmailJS public key (user ID)
    );
    return result.text;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
