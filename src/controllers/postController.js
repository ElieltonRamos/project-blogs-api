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

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};