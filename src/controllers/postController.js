const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const postInfo = { title, content, userId: user.id };
  const { status, data } = await services.registerPost(postInfo, categoryIds);
  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = {
  createPost,
};