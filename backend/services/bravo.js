const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// Send an email using async/await
const SendMail = async (tomail,subject,msg) => {
try {
     const info = await transporter.sendMail({
    from: '"SkyElite" <maddison53@ethereal.email>',
    to: tomail,
    subject:subject,
     html: msg, // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
  return true
} catch (error) {
    console.log(error)
    return false
}
  
}

module.exports = SendMail;