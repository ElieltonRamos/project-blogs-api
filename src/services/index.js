const login = require('./loginService');
const { createUser, findAllUsers, findUserId, destroyUser } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');
const { registerPost, findPostsByUser, findPostById,
  editPost, destroyPost, searchPost } = require('./postService');

module.exports = {
  login,
  createUser,
  findAllUsers,
  findUserId,
  destroyUser,
  createCategory,
  getAllCategories,
  registerPost,
  findPostsByUser,
  findPostById,
  editPost,
  destroyPost,
  searchPost,
};