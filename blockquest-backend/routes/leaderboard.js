const express = require('express');
const router = express.Router();
const { getLeaderboard } = require('../controllers/leaderboardController');

// Get top XP users
router.get('/', getLeaderboard);

module.exports = router; 