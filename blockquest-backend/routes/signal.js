const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getFeed, trackUser } = require('../controllers/signalController');

// Get recent trades from followed users
router.get('/feed', auth, getFeed);
// Subscribe to a Farcaster user
router.post('/track', auth, trackUser);

module.exports = router; 