// Placeholder for nonce storage (in-memory for demo)
const nonces = {};
const { signToken } = require('../utils/jwt');
const User = require('../models/User');
const { ethers } = require('ethers');

// POST /api/auth/nonce
exports.getNonce = async (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ msg: 'Address required' });
  const nonce = Math.floor(Math.random() * 1000000).toString();
  nonces[address.toLowerCase()] = nonce;
  res.json({ nonce });
};

// POST /api/auth/login
exports.walletLogin = async (req, res) => {
  const { address, signature } = req.body;
  if (!address || !signature) return res.status(400).json({ msg: 'Address and signature required' });
  const nonce = nonces[address.toLowerCase()];
  if (!nonce) return res.status(400).json({ msg: 'Nonce not found' });
  try {
    const recovered = ethers.utils.verifyMessage(nonce, signature);
    if (recovered.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ msg: 'Invalid signature' });
    }
    let user = await User.findOne({ address: address.toLowerCase() });
    if (!user) user = await User.create({ address: address.toLowerCase() });
    const token = signToken(user);
    delete nonces[address.toLowerCase()];
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ msg: 'Signature verification failed' });
  }
}; 