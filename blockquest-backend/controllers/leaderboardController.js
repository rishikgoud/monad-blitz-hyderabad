const User = require('../models/User');

// GET /api/leaderboard
exports.getLeaderboard = async (req, res) => {
  const users = await User.find({})
    .sort({ xp: -1 })
    .limit(10)
    .select('address xp');
  const leaderboard = users.map((u, i) => ({
    address: u.address,
    xp: u.xp,
    rank: i + 1,
  }));
  res.json(leaderboard);
}; 