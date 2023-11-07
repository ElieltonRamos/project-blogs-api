const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const postInfo = { title, content, userId: user.id };
  const { status, data } = await services.registerPost(postInfo, categoryIds);
  res.status(mapHTTPStatus(status)).send(data);
};

const getAllPosts = async (req, res) => {
  const { user } = req;
  const { status, data } = await services.findPostsByUser(user.id);
  res.status(mapHTTPStatus(status)).send(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await services.findPostById(id);
  res.status(mapHTTPStatus(status)).send(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { user } = req;
  const postInfo = { id, title, content, userId: user.id };
  const { status, data } = await services.editPost(postInfo);
  res.status(mapHTTPStatus(status)).send(data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { status, data } = await services.destroyPost(id, user.id);
  res.status(mapHTTPStatus(status)).send(data);
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const { id } = req.user;
  const { status, data } = await services.searchPost(q, id);
  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};