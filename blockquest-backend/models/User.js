const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  address: { type: String, unique: true, required: true },
  xp: { type: Number, default: 0 },
  completedQuests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  walletHealth: { type: Number, default: 0 },
  followedSignals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Signal' }],
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema); 