const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/sendVerificationEmail', (req, res) => {
    let { email, verificationCode } = req.body;

    // Create a transport object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.example.com",   // Replace with your SMTP host
        port: 587,                  // Replace with your SMTP port
        secure: false,              // true for 465, false for other ports
        auth: {
            user: "jayxiao0718@gmail.com", // Replace with your email
            pass: "your-email-password"     // Replace with your email password
        },
    });

    // Send email with the verification code
    transporter.sendMail({
        from: '"Your App" <jayxiao0718@gmail.com>', // Replace with your email
        to: email,  // User's email
        subject: "Your Verification Code",
        text: `Your verification code is: ${verificationCode}`,
        html: `<b>Your verification code is: ${verificationCode}</b>`,
    })
    .then(() => {
        res.status(200).json({ success: true, message: 'Verification email sent successfully' });
    })
    .catch(err => {
        console.error('Error sending email:', err);
        res.status(500).json({ success: false, message: 'Failed to send verification email' });
    });
});

module.exports = router;
