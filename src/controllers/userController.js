const { User } = require('../models');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        profile: user.profile,
        skills: user.skills,
        experience: user.experience,
        resume: user.resume,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, profile, skills, experience } = req.body;
    const userFields = {};

    if (name) userFields.name = name;
    if (phone) userFields.phone = phone;
    if (profile) userFields.profile = profile;
    if (skills) userFields.skills = Array.isArray(skills) ? skills : skills.split(',').map(skill => skill.trim());
    if (experience) userFields.experience = experience;
    if (req.file) userFields.resume = req.file.path;

    const user = await User.findByPk(req.user.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    await user.update(userFields);

    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        profile: user.profile,
        skills: user.skills,
        experience: user.experience,
        resume: user.resume,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
