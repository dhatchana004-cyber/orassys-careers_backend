const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.use(protect);

router.get('/profile', getProfile);
router.put('/profile', upload.single('resume'), updateProfile);

module.exports = router;
