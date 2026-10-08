const express = require('express');
const { createApplication, getMyApplications, getMyApplication, parseResume } = require('../controllers/applicationController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Public route for parsing resumes
router.post('/parse-resume', upload.single('resume'), parseResume);

// Apply protection to all other routes
router.use(protect);

router.post('/', upload.single('resume'), createApplication);
router.get('/my', getMyApplications);
router.get('/my/:id', getMyApplication);

module.exports = router;
