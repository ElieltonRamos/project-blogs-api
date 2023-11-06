const login = require('./loginService');
const { createUser, findAllUsers, findUserId } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');
const { registerPost, findPostsByUser, findPostById, editPost } = require('./postService');

module.exports = {
  login,
  createUser,
  findAllUsers,
  findUserId,
  createCategory,
  getAllCategories,
  registerPost,
  findPostsByUser,
  findPostById,
  editPost,
};