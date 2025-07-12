const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  tx: String,
  token: String,
  amount: Number,
  timestamp: Date,
}, { _id: false });

const SignalSchema = new mongoose.Schema({
  farcasterUser: { type: String, required: true },
  trades: [TradeSchema],
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Signal', SignalSchema); 