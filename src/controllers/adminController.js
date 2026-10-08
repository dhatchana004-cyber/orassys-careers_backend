const { User, Job, Application } = require('../models');

// --- JOB MANAGEMENT ---

exports.createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.id;
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    await job.update(req.body);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    
    // Also delete associated applications
    await Application.destroy({ where: { jobId: req.params.id } });
    await job.destroy();
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateJobStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['draft', 'published', 'closed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    await job.update({ status });
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- USER MANAGEMENT ---

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ 
      where: { role: 'user' },
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['active', 'inactive'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    await user.update({ status });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    await Application.destroy({ where: { userId: req.params.id } });
    await user.destroy();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- APPLICATION MANAGEMENT ---

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({
      include: [
        { model: Job, as: 'job', attributes: ['title', 'department'] },
        { model: User, as: 'user', attributes: ['name', 'email'] }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id, {
      include: [
        { model: Job, as: 'job' },
        { model: User, as: 'user', attributes: ['name', 'email'] }
      ]
    });
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['Applied', 'Under Review', 'Shortlisted', 'Interview', 'Selected', 'Rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }
    const application = await Application.findByPk(req.params.id);
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    await application.update({ status });
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    
    if (application.resume) {
      const fs = require('fs');
      const path = require('path');
      const filePath = path.join(__dirname, '../../uploads', application.resume.split(/[\\/]/).pop());
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await application.destroy();
    res.status(200).json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- DASHBOARD ---

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.count({ where: { role: 'user' } });
    const totalJobs = await Job.count();
    const activeJobs = await Job.count({ where: { status: 'published' } });
    const totalApplications = await Application.count();
    
    const pendingApplications = await Application.count({ where: { status: 'Applied' } });
    const shortlistedApplications = await Application.count({ where: { status: 'Shortlisted' } });
    const selectedApplications = await Application.count({ where: { status: 'Selected' } });
    const rejectedApplications = await Application.count({ where: { status: 'Rejected' } });

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalJobs,
        activeJobs,
        totalApplications,
        pendingApplications,
        shortlistedApplications,
        selectedApplications,
        rejectedApplications
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
