const login = require('./loginController');
const { createUser, getAllUsers, getUserId } = require('./userController');
const { createCategory, getAllCategories } = require('./categoryController');
const { createPost, getAllPosts } = require('./postController');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserId,
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
};