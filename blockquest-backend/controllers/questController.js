const Quest = require('../models/Quest');
const User = require('../models/User');

// GET /api/quests
exports.getQuests = async (req, res) => {
  const quests = await Quest.find({ isActive: true });
  res.json(quests);
};

// POST /api/quests/complete
exports.completeQuest = async (req, res) => {
  const { questId } = req.body;
  if (!questId) return res.status(400).json({ msg: 'Quest ID required' });
  const quest = await Quest.findById(questId);
  if (!quest) return res.status(404).json({ msg: 'Quest not found' });
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  if (user.completedQuests.includes(questId)) return res.status(400).json({ msg: 'Quest already completed' });
  user.completedQuests.push(questId);
  user.xp += quest.rewardXP;
  await user.save();
  res.json({ success: true, xp: user.xp });
};

// GET /api/quests/status
exports.getQuestStatus = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  const completed = user.completedQuests.map(q => q.toString());
  const allQuests = await Quest.find({});
  const status = allQuests.map(q => ({
    id: q._id,
    title: q.title,
    completed: completed.includes(q._id.toString()),
    rewardXP: q.rewardXP,
  }));
  res.json(status);
}; 