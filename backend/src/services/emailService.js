const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Function to send welcome email
const sendWelcomeEmail = async (email, name, role) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to LabourNet!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #004A57;">Welcome to LabourNet!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering as a ${role} on LabourNet. We're excited to have you on board!</p>
          <p>With LabourNet, you can:</p>
          <ul>
            <li>Connect with ${role === 'worker' ? 'contractors and builders' : 'skilled workers'}</li>
            <li>Find ${role === 'worker' ? 'job opportunities' : 'qualified workers'}</li>
            <li>Manage your ${role === 'worker' ? 'applications' : 'projects'} efficiently</li>
          </ul>
          <p>If you have any questions or need assistance, feel free to contact our support team.</p>
          <p>Best regards,<br>The LabourNet Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

module.exports = {
  sendWelcomeEmail
}; 