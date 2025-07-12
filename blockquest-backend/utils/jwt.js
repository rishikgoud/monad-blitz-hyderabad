const jwt = require('jsonwebtoken');

const signToken = (user) => {
  return jwt.sign(
    { user: { id: user._id, address: user.address } },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { signToken, verifyToken }; 