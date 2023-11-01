const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await services.createUser({ displayName, email, password, image });

  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = {
  createUser,
};