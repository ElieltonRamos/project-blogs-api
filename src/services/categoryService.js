const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };

  const categoryExists = await Category.findOne({ where: { name } });
  const data = { message: 'Category already registered' };

  if (categoryExists) return { status: 'BAD_REQUEST', data };

  const resultDB = await Category.create({ name });
  const newCategory = { id: resultDB.null, name };

  return { status: 'CREATED', data: newCategory };
};

module.exports = {
  createCategory,
};