const login = require('./loginService');
const { createUser, findAllUsers } = require('./userService');

module.exports = {
  login,
  createUser,
  findAllUsers,
};