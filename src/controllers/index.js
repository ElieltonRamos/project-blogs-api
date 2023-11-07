const login = require('./loginController');
const { createUser, getAllUsers, getUserId, deleteUser } = require('./userController');
const { createCategory, getAllCategories } = require('./categoryController');
const { createPost, getAllPosts, getPostById,
  updatePost, deletePost } = require('./postController');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserId,
  deleteUser,
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};