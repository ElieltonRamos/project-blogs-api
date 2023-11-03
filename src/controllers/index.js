const login = require('./loginController');
const { createUser, getAllUsers } = require('./userController');

module.exports = {
  login,
  createUser,
  getAllUsers,
};