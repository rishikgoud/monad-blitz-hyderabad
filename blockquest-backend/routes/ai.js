const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { analyzeWallet, sentiment, tradeAnalysis } = require('../controllers/aiController');

// Analyze wallet health
router.post('/analyze-wallet', auth, analyzeWallet);
// AI-based sentiment
router.post('/sentiment', auth, sentiment);
// AI trade breakdown
router.post('/trade-analysis', auth, tradeAnalysis);

module.exports = router; 