const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "a16c61001@smtp-brevo.com",
    pass: process.env.SMTP_EMAIL_PASSWORD,
  },
});


const sendResetPasswordEmail = async (to, resetLink) => {
  const mailOptions = {
    from: '"Booking System Support" <raghavnegi307@gmail.com>',
    to,
    subject: "Password Reset Request",
    html: `
      <p>You requested a password reset for your Booking account.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Password reset email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
  }
};

const resetPasswordEmail = async (to, user) => {
  const mailOptions = {
    from: '"Booking System Support" <raghavnegi307@gmail.com>',
    to,
    subject: "Password Reset Successful",
    html: `
        <p>Hi ${user.first_name} ${user.last_name},</p>
      <p>Your password has been successfully reset.</p>
      <p>If you did not perform this action, please contact our support immediately.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Password reset confirmation email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset confirmation email:", error);
  }
}

module.exports = {
  sendResetPasswordEmail,
    resetPasswordEmail
};