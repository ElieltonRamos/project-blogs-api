const login = require('./loginService');
const { createUser, findAllUsers, findUserId } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');

module.exports = {
  login,
  createUser,
  findAllUsers,
  findUserId,
  createCategory,
  getAllCategories,
};