const express = require('express');
const router = express.Router();
const { getNonce, walletLogin } = require('../controllers/authController');

// Get nonce for wallet address
router.post('/nonce', getNonce);
// Wallet-based login
router.post('/login', walletLogin);

module.exports = router; 