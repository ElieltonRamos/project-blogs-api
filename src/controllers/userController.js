const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const createUser = (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = services.createUser({ displayName, email, password, image });

  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = {
  createUser,
};