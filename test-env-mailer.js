require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zeptomail.in',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'emailapikey',
    pass: process.env.SMTP_PASS,
  },
});
const mailOptions = {
    from: '\' + process.env.SMTP_FROM_NAME + '\ <' + process.env.SMTP_FROM + '>',
    to: 'career@tridinsoftware.com',
    subject: 'Test env quotes',
    text: 'Test',
  };
console.log(mailOptions);
transporter.sendMail(mailOptions).then(i => console.log('Sent')).catch(e => console.error(e));

