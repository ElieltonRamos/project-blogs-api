const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define('post_categories', {
    post_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  });

  postCategoriesTable.associate = ({ categories, blog_posts }) => {
    postCategoriesTable.belongsTo(categories, {
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