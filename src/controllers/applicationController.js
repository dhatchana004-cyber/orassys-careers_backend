const { Application, Job } = require('../models');

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
    });

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
