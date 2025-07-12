const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, updateXP } = require('../controllers/userController');

// Get user profile
router.get('/profile', auth, getProfile);
// Update XP on quest completion
router.patch('/xp', auth, updateXP);

module.exports = router; 