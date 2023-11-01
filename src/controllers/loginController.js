const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await services.login(email, password);
  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = login;