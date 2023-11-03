const login = require('./loginController');
const { createUser, getAllUsers, getUserId } = require('./userController');
const { createCategory, getAllCategories } = require('./categoryController');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserId,
  createCategory,
  getAllCategories,
};