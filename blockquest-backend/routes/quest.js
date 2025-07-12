const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getQuests, completeQuest, getQuestStatus } = require('../controllers/questController');

// Fetch all quests
router.get('/', auth, getQuests);
// Mark quest complete, reward XP
router.post('/complete', auth, completeQuest);
// Show quest status for user
router.get('/status', auth, getQuestStatus);

module.exports = router; 