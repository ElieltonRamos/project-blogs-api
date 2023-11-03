const login = require('./loginController');
const { createUser, getAllUsers, getUserId } = require('./userController');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserId,
};