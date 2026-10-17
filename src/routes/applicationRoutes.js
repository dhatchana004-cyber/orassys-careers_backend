const express = require('express');
const { createApplication, getMyApplications, getMyApplication, parseResume, checkResumeATS } = require('../controllers/applicationController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Public routes for resume tools
router.post('/parse-resume', upload.single('resume'), parseResume);
router.post('/check-ats', upload.single('resume'), checkResumeATS);

// Apply protection to all other routes
router.use(protect);

router.post('/', upload.single('resume'), createApplication);
router.get('/my', getMyApplications);
router.get('/my/:id', getMyApplication);

module.exports = router;
