const services = require('../services');
const mapHTTPStatus = require('../utils/mapHTTPStatus');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await services.createCategory(name);
  res.status(mapHTTPStatus(status)).send(data);
};

const getAllCategories = async (_req, res) => {
  const { status, data } = await services.getAllCategories();
  res.status(mapHTTPStatus(status)).send(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};