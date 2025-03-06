const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com", // Hostinger's SMTP server
        port: 465, // Secure SSL port
        secure: true, // Use SSL
        auth: {
            user: process.env.EMAIL_USER, // Your Hostinger email
            pass: process.env.EMAIL_PASS, // Your email password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

module.exports = sendEmail;
