const express = require('express');
const { createApplication, getMyApplications, getMyApplication } = require('../controllers/applicationController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Apply protection to all routes
router.use(protect);

router.post('/', upload.single('resume'), createApplication);
router.get('/my', getMyApplications);
router.get('/my/:id', getMyApplication);

module.exports = router;
