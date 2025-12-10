const User = require('../models/User');
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  // hash and create (similar to register)
};
