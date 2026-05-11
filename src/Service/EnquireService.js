// Service/emailService.js
import emailjs from 'emailjs-com';

export const sendEnquiry = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_ufzio7t',
      'template_oxj5bhc',
      {
        parentName: formData.parentName,
        studentName: formData.studentName,
        gender: formData.gender,
        applyFor: formData.applyFor,
        email: formData.email,
        phone: formData.phone,
        preferredLocation: formData.preferredLocation,
        city: formData.city,
        message: formData.message,
      },
      'EsFxZwS00BPG3G4Rr'
    );
    return result.text;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
