const User = require('../models/User');

// GET /api/user/profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('completedQuests followedSignals');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({
      address: user.address,
      xp: user.xp,
      completedQuests: user.completedQuests,
      walletHealth: user.walletHealth,
      followedSignals: user.followedSignals,
      createdAt: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// PATCH /api/user/xp
exports.updateXP = async (req, res) => {
  try {
    const { xp } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $inc: { xp: xp || 0 } },
      { new: true }
    );
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({ xp: user.xp });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}; 