const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zeptomail.in',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false, // TLS on port 587
  auth: {
    user: process.env.SMTP_USER || 'emailapikey',
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send Confirmation Email to Candidate
 */
const sendCandidateConfirmationEmail = async ({ applicantName, applicantEmail, roleTitle }) => {
  const logoUrl = process.env.TRIDIN_LOGO_URL || 'https://tridinsoftware.com/Tridin_Software_Logo_Transparent.png';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px;">
      
      <h2 style="color: #0284c7; margin-top: 0;">Thank you for applying to Tridin Software!</h2>
      
      <p>Dear <strong>${applicantName}</strong>,</p>
      
      <p>We have successfully received your application for the position of <strong>${roleTitle}</strong> through our hiring portal.</p>
      
      <p>Our talent acquisition team is currently reviewing your resume and profile. If your qualifications match our requirement, our team will get in touch with you to schedule an interview.</p>
      
      <br/>
      <p style="margin-bottom: 5px;">Best regards,</p>
      
      <!-- KIAQ Style Signature with Tridin Logo -->
      <table style="border-collapse: collapse; margin-top: 10px; padding-top: 10px;">
        <tr>
          <td style="padding-right: 15px; border-right: 2px solid #0284c7; vertical-align: middle;">
            <img src="${logoUrl}" alt="Tridin Software Logo" style="width: 130px; height: auto; display: block;" />
          </td>
          <td style="padding-left: 15px; vertical-align: middle;">
            <p style="margin: 0; font-weight: bold; color: #0f172a; font-size: 14px; letter-spacing: 0.5px;">RECRUITMENT TEAM</p>
            <p style="margin: 2px 0; color: #64748b; font-size: 12px; font-weight: 500;">Tridin Software Private Limited</p>
            <p style="margin: 2px 0; font-size: 12px;">
              <a href="mailto:career@tridinsoftware.com" style="color: #0284c7; text-decoration: none;">career@tridinsoftware.com</a>
            </p>
            <p style="margin: 2px 0; font-size: 12px;">
              <a href="https://tridinsoftware.com" style="color: #0284c7; text-decoration: none; font-weight: bold;">www.tridinsoftware.com</a>
            </p>
          </td>
        </tr>
      </table>

    </div>
  `;

  return await transporter.sendMail({
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
    to: applicantEmail,
    subject: `Application Received for ${roleTitle} - Tridin Software`,
    html,
  });
};

/**
 * Send Application Alert to Tridin HR Team
 */
const sendHRNotificationEmail = async (appData) => {
  const logoUrl = process.env.TRIDIN_LOGO_URL || 'https://tridinsoftware.com/Tridin_Software_Logo_Transparent.png';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px;">
      
      <h2 style="color: #10b981; margin-top: 0;">🚀 New Job Application Received (via Orassys Portal)</h2>
      
      <p><strong>Position Applied:</strong> ${appData.roleTitle}</p>
      
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px;">
        <h3 style="margin-top: 0; color: #0f172a; font-size: 15px;">Candidate Details</h3>
        <p style="margin: 4px 0;"><strong>Name:</strong> ${appData.applicantName}</p>
        <p style="margin: 4px 0;"><strong>Email:</strong> ${appData.applicantEmail}</p>
        <p style="margin: 4px 0;"><strong>Phone:</strong> ${appData.applicantPhone || 'N/A'}</p>
        <p style="margin: 4px 0;"><strong>Experience:</strong> ${appData.experience || 'N/A'}</p>
        <p style="margin: 4px 0;"><strong>Key Skills:</strong> ${appData.keySkills || 'N/A'}</p>
      </div>

      <br/>
      
      <!-- Tridin Logo Footer -->
      <table style="border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td style="padding-right: 15px; border-right: 2px solid #10b981; vertical-align: middle;">
            <img src="${logoUrl}" alt="Tridin Software" style="width: 110px; height: auto; display: block;" />
          </td>
          <td style="padding-left: 15px; vertical-align: middle;">
            <p style="margin: 0; font-weight: bold; color: #0f172a; font-size: 13px;">Tridin Automated HR Notification System</p>
            <p style="margin: 2px 0; color: #64748b; font-size: 11px;">Orassys Career Portal Integration</p>
          </td>
        </tr>
      </table>

    </div>
  `;

  const mailOptions = {
    from: `"${appData.applicantName} (via Orassys Careers)" <${process.env.SMTP_FROM}>`,
    to: process.env.HR_NOTIFICATION_EMAIL || 'career@tridinsoftware.com',
    subject: `🚀 New Job Application: ${appData.applicantName} for ${appData.roleTitle}`,
    html,
    replyTo: appData.applicantEmail,
  };

  if (appData.resumeAttachment) {
    mailOptions.attachments = [appData.resumeAttachment];
  }

  return await transporter.sendMail(mailOptions);
};

module.exports = {
  sendCandidateConfirmationEmail,
  sendHRNotificationEmail
};
