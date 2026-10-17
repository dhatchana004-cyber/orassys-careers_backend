const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.zeptomail.in',
  port: 587,
  secure: false,
  auth: {
    user: 'emailapikey',
    pass: 'PHtE6r0KR+G93mcm8URU4fK+EpSkZth4/79uJFRGt4YQC/ZXHk1Sr9p4xjTjrh0iUPNFQPaYmtg54rLOsLiFdzvrZmlFX2qyqK3sx/VYSPOZsbq6x00ctFgff0XeUYTmd9Rs0yPTudvSNA=='
  }
});
transporter.sendMail({
  from: 'career@tridinsoftware.com',
  to: 'career@tridinsoftware.com',
  subject: 'Test Email',
  text: 'Test content'
}).then(i => console.log('Sent', i)).catch(e => console.error('Error', e));
