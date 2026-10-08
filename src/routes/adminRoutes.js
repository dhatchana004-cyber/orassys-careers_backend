const express = require('express');
const { 
  createJob, getJobs, getJob, updateJob, deleteJob, updateJobStatus,
  getUsers, getUser, updateUserStatus, deleteUser,
  getApplications, getApplication, updateApplicationStatus, deleteApplication,
  getDashboardStats 
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Apply protection and admin authorization to all routes
router.use(protect);
router.use(authorize('admin'));

// Dashboard Stats
router.get('/dashboard/stats', getDashboardStats);

// Job Management
router.post('/jobs', createJob);
router.get('/jobs', getJobs);
router.get('/jobs/:id', getJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);
router.patch('/jobs/:id/status', updateJobStatus);

// User Management
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id/status', updateUserStatus);
router.delete('/users/:id', deleteUser);

// Application Management
router.get('/applications', getApplications);
router.get('/applications/:id', getApplication);
router.patch('/applications/:id/status', updateApplicationStatus);
router.delete('/applications/:id', deleteApplication);

module.exports = router;
