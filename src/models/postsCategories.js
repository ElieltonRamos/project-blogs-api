const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define('post_categories', {
    post_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  });

  postCategoriesTable.associate = ({ Category, blog_posts }) => {
    postCategoriesTable.belongsTo(Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
    postCategoriesTable.belongsTo(blog_posts, {
      foreignKey: 'post_id',
      as: 'post',
    });
  };

  return postCategoriesTable;
};

module.exports = postCategoriesSchema;