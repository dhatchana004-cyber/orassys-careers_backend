const { Application, Job } = require('../models');
const { sendCandidateConfirmationEmail, sendHRNotificationEmail } = require('../utils/mailer');
const pdfParse = require('pdf-parse');
const { extractTextFromResume, calculateATSScore } = require('../services/atsService');

// @desc    Apply for a job
// @route   POST /api/applications
// @access  Private
exports.createApplication = async (req, res) => {
  try {
    const { 
      job: jobId, fullName, email, phone, coverLetter, additionalInformation,
      highestQualification, totalExperience, currentLocation, noticePeriod,
      availableToWorkInChennai, expectedCTC, keyTechStack, portfolioLink
    } = req.body;

    // Check if job exists
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    if (job.status !== 'published') {
      return res.status(400).json({ success: false, message: 'Job is not open for applications' });
    }

    // Deadline validation disabled for demo purposes
    // if (new Date(job.applicationDeadline) < new Date()) {
    //   return res.status(400).json({ success: false, message: 'Application deadline has passed' });
    // }

    // Check if user already applied
    const existingApp = await Application.findOne({ where: { userId: req.user.id, jobId } });
    if (existingApp) {
      return res.status(400).json({ success: false, message: 'You have already applied for this job' });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Resume is required' });
    }

    // Evaluate ATS Score automatically on submit
    let atsScore = null;
    let atsBreakdown = null;
    try {
      const resumeText = await extractTextFromResume(req.file.path);
      const atsResult = calculateATSScore({
        resumeText,
        candidate: {
          fullName,
          email,
          phone,
          highestQualification,
          totalExperience,
          keyTechStack,
          portfolioLink
        },
        job
      });
      atsScore = atsResult.totalScore;
      atsBreakdown = atsResult;
    } catch (atsErr) {
      console.error('ATS evaluation error on createApplication:', atsErr.message);
    }

    // Create application
    const application = await Application.create({
      userId: req.user.id,
      jobId,
      fullName,
      email,
      phone,
      highestQualification,
      totalExperience,
      currentLocation,
      noticePeriod,
      availableToWorkInChennai,
      expectedCTC,
      keyTechStack,
      portfolioLink,
      resume: req.file.path,
      coverLetter,
      additionalInformation,
      atsScore,
      atsBreakdown,
    });

    // Send emails
    try {
      await sendCandidateConfirmationEmail({
        applicantName: fullName,
        applicantEmail: email,
        roleTitle: job.title,
      });

      let resumeAttachment = null;
      if (req.file) {
        resumeAttachment = {
          filename: req.file.originalname,
          path: req.file.path
        };
      }

      await sendHRNotificationEmail({
        applicantName: fullName,
        applicantEmail: email,
        applicantPhone: phone,
        roleTitle: job.title,
        experience: totalExperience,
        keySkills: keyTechStack,
        resumeAttachment,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ success: false, message: 'You have already applied for this job' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get logged in user's applications
// @route   GET /api/applications/my
// @access  Private
exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({ 
      where: { userId: req.user.id },
      include: [{ model: Job, as: 'job', attributes: ['title', 'department', 'location'] }]
    });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single application of logged in user
// @route   GET /api/applications/my/:id
// @access  Private
exports.getMyApplication = async (req, res) => {
  try {
    const application = await Application.findOne({ 
      where: { id: req.params.id, userId: req.user.id },
      include: [{ model: Job, as: 'job' }]
    });

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const mammoth = require('mammoth');

// @desc    Parse uploaded resume for auto-fill
// @route   POST /api/applications/parse-resume
// @access  Private
exports.parseResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No resume file uploaded' });
    }
    
    const fs = require('fs');
    let text = '';

    if (req.file.originalname.toLowerCase().endsWith('.pdf') || req.file.mimetype === 'application/pdf') {
      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdfParse(dataBuffer);
      text = data.text;
    } else if (req.file.originalname.toLowerCase().endsWith('.docx') || req.file.mimetype.includes('word')) {
      try {
        const result = await mammoth.extractRawText({ path: req.file.path });
        text = result.value;
      } catch (err) {
        console.error("Mammoth couldn't parse this docx/doc:", err.message);
        text = ''; // Fallback gracefully instead of crashing
      }
    } else {
      // Fallback for unsupported types
      fs.unlinkSync(req.file.path);
      return res.status(200).json({ success: true, data: {} });
    }

    // DEBUG: Log the raw extracted text
    console.log('=== RAW EXTRACTED TEXT START ===');
    console.log(text);
    console.log('=== RAW EXTRACTED TEXT END ===');
    
    // Extract Name (First non-empty line ignoring generic headers and section titles)
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let fullName = '';
    const ignoreRegex = /^(resume|curriculum vitae|cv|profile|career objective|objective|technical skills|skills|education|experience|projects|certifications|contact|about me|summary|python full stack developer|java developer|software engineer|front end|back end|full stack|developer|engineer|internship|declaration|hobbies|languages|personal details|personal profile)$/i;
    for (const line of lines) {
      if (!ignoreRegex.test(line) && line.length > 2 && line.split(' ').length <= 5 && !/[0-9]/.test(line) && !/[^a-zA-Z\s\.\-]/.test(line)) {
        fullName = line;
        break;
      }
    }
    if (fullName.length > 40) fullName = fullName.substring(0, 40) + '...';
    
    // Extract Email
    const emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6})\b/i);
    const email = emailMatch ? emailMatch[1] : '';
    
    // Extract Phone (Supports standard Indian 10-digit formats with spaces and international formats)
    const phoneMatch = text.match(/(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}|(?:(?:\+|0{0,2})91[\s.-]?)?[6789](?:[\s.-]?\d){9}/);
    const phone = phoneMatch ? phoneMatch[0].trim() : '';

    // Extract Total Experience
    let totalExperience = 'Fresher (0-1 Yrs)';
    if (/\b(fresher|0 years?|no experience)\b/i.test(text)) {
      totalExperience = 'Fresher (0-1 Yrs)';
    } else {
      const expMatch = text.match(/(\d+(?:\.\d+)?)\+?\s*(?:years?|yrs?)\s+(?:of\s+)?(?:working\s+|professional\s+)?experience/i) || 
                       text.match(/(?:work\s+)?experience\s*[:\-]?\s*(\d+(?:\.\d+)?)\+?\s*(?:years?|yrs?)/i) ||
                       text.match(/(\d+(?:\.\d+)?)\+?\s*(?:years?|yrs?)/i); // Fallback to just "X years" if no fresher keyword
                       
      if (expMatch) {
        const years = parseFloat(expMatch[1]);
        if (years >= 5) totalExperience = '5+ Years';
        else if (years >= 3) totalExperience = '3-5 Years';
        else if (years >= 1) totalExperience = '1-3 Years';
      }
    }
    
    // Extract Tech Stack
    const techKeywords = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'Express', 'HTML', 'CSS', 'AWS', 'Docker', 'Angular', 'Vue', 'Next.js', 'PostgreSQL', 'TypeScript', 'C\\+\\+', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Go'];
    const foundTech = techKeywords.filter(tech => {
      if (tech === 'C\\+\\+') return new RegExp('C\\+\\+', 'i').test(text);
      const escapedTech = tech.replace(/\./g, '\\.');
      return new RegExp(`\\b${escapedTech}\\b`, 'i').test(text);
    });
    const keyTechStack = foundTech.map(t => t.replace(/\\/g, '')).join(', ');

    // Extract Qualification
    let highestQualification = '';
    const qualRegex = /\b(M\.?Tech|Master of Technology|Master of Engineering|M\.E\.?|B\.?Tech|Bachelor of Technology|Bachelor of Engineering|B\.E\.?|M\.?Sc|Master of Science|B\.?Sc|Bachelors? of Science|MCA|Master of Computer Applications|BCA|Bachelor of Computer Applications|B\.Com|Bachelor of Commerce|MBA|Master of Business Administration|Diploma)\b/i;
    const qualMatch = text.match(qualRegex);
    if (qualMatch) {
      highestQualification = qualMatch[1];
    }

    // Delete temp file after parsing
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      success: true,
      data: {
        fullName,
        email,
        phone,
        highestQualification,
        totalExperience,
        keyTechStack,
      }
    });
  } catch (error) {
    console.error('Error parsing resume:', error);
    // Don't fail the request, just return empty data if parsing fails
    if (req.file && req.file.path) {
      const fs = require('fs');
      if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    }
    res.status(200).json({ success: true, data: {} });
  }
};

// @desc    Check ATS score for a resume against a job without applying (Candidate test tool)
// @route   POST /api/applications/check-ats
// @access  Public
exports.checkResumeATS = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No resume file uploaded' });
    }

    const fs = require('fs');
    const { jobId, targetRole, requiredSkills, experience } = req.body;

    let targetJob = null;
    if (jobId) {
      targetJob = await Job.findByPk(jobId);
    }

    // Build job object
    const jobData = targetJob ? {
      title: targetJob.title,
      requiredSkills: targetJob.requiredSkills,
      experience: targetJob.experience,
      qualifications: targetJob.qualifications,
      description: targetJob.description
    } : {
      title: targetRole || 'Software Professional',
      requiredSkills: requiredSkills ? (Array.isArray(requiredSkills) ? requiredSkills : requiredSkills.split(/[,|\n]/)) : [],
      experience: experience || '1-3 Years',
      qualifications: [],
      description: ''
    };

    const resumeText = await extractTextFromResume(req.file.path);
    const atsResult = calculateATSScore({
      resumeText,
      candidate: {
        totalExperience: req.body.totalExperience || '',
        highestQualification: req.body.highestQualification || '',
        keyTechStack: req.body.keyTechStack || ''
      },
      job: jobData
    });

    // Remove temp file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).json({
      success: true,
      data: atsResult
    });
  } catch (error) {
    console.error('Error checking ATS:', error);
    if (req.file && req.file.path) {
      const fs = require('fs');
      if (fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ success: false, message: error.message });
  }
};
