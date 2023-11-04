const { BlogPost, PostCategory, Category, User } = require('../models');
const db = require('../models');

const verifyFieldsPost = (title, content, categoryIds) => {
  const fieldsValids = !(title && content);
  if (fieldsValids) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  if (!categoryIds || categoryIds.length === 0) {
    return { status: 'BAD_REQUEST', data: { message: '"one or more "categoryIds" not found' } };
  }
  return false;
};

const verifyCategory = async (categoryIds) => {
  const exists = await Category.findAll({ where: { id: categoryIds } });
  if (exists.length !== categoryIds.length) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  return false;
};

const registerPost = async (postInfo, categoryIds) => {
  const fieldsValids = verifyFieldsPost(postInfo.title, postInfo.content, categoryIds);
  const categoryValids = await verifyCategory(categoryIds);
  if (fieldsValids || categoryValids) return fieldsValids || categoryValids;
  
  const post = { ...postInfo, published: new Date(), updated: new Date() };
  const transaction = await db.sequelize.transaction();
  try {
    const responseDB = await BlogPost.create(post, { transaction });
    const id = responseDB.null;

    await Promise.all(categoryIds.map((categoryId) => PostCategory
      .create({ postId: id, categoryId }, { transaction })));

    const newPost = { ...responseDB.dataValues, id };
    await transaction.commit();

    return { status: 'CREATED', data: newPost };
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    return { status: 'INTERNAL_SERVER_ERROR', data: { message: error.message } };
  }
};

const findPostsByUser = async (userId) => {
  const Posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      where: { id: userId },
      attributes: { exclude: ['password'] },
    }],
  });
  const categories = await Category.findAll({ where: { id: Posts[0].id } });
  const result = [{ ...Posts[0].dataValues, categories }];
  return { status: 'OK', data: result };
};

module.exports = {
  registerPost,
  findPostsByUser,
};