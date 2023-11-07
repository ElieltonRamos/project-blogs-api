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
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] }, where: { id: userId } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'OK', data: posts };
};

const findPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  return { status: 'OK', data: post.dataValues };
};

const validEditPost = async (id, userId) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  
  });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  if (post.dataValues.userId !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }
  return post.dataValues;
};

const editPost = async (postInfo) => {
  const { id, title, content, userId } = postInfo;
  const validPost = await validEditPost(id, userId);
  if (!(title && content)) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  if (validPost.status) return validPost;
  
  const updated = new Date();

  await BlogPost.update(
    { title, content, updated },
    { where: { id } },
  );

  const postEdited = { ...validPost, title, content, updated };

  return { status: 'OK', data: postEdited };
};

const destroyPost = async (postId, userId) => {
  const validPost = await validEditPost(postId, userId);
  if (validPost.status) return validPost;
  
  await BlogPost.destroy({ where: { id: postId } });
  return { status: 'NO_CONTENT', data: '' };
};

const searchPost = async (q, userId) => {
  const posts = await BlogPost.findAll({
    where: { [db.Sequelize.Op.or]: [
      { title: { [db.Sequelize.Op.like]: `%${q}%` } },
      { content: { [db.Sequelize.Op.like]: `%${q}%` } },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] }, where: { id: userId } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!posts) return { status: 'OK', data: [] };

  return { status: 'OK', data: posts };
};

module.exports = {
  registerPost,
  findPostsByUser,
  findPostById,
  editPost,
  destroyPost,
  searchPost,
};
