require('dotenv').config();
const { sendCandidateConfirmationEmail, sendHRNotificationEmail } = require('./src/utils/mailer');

async function testEmails() {
  try {
    console.log('Sending candidate email...');
    await sendCandidateConfirmationEmail({
      applicantName: 'Test User',
      applicantEmail: 'career@tridinsoftware.com',
      roleTitle: 'Java Developer'
    });
    console.log('Candidate email sent!');

    console.log('Sending HR email...');
    await sendHRNotificationEmail({
      applicantName: 'Test User',
      applicantEmail: 'career@tridinsoftware.com',
      applicantPhone: '1234567890',
      roleTitle: 'Java Developer',
      experience: '2 Years',
      keySkills: 'Java, Spring',
      resumeAttachment: null
    });
    console.log('HR email sent!');
  } catch (err) {
    console.error('Email Test Failed:', err);
  }
}

testEmails();
