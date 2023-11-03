const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
  },{
    tableName: 'post_categories',
    timestamps: false,
    underscored: true,
  });

  postCategoriesTable.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      through: postCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'id',
      as: 'category',
    });
    Category.belongsToMany(BlogPost, {
      through: postCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'id',
      as: 'post',
    });
  };

  return postCategoriesTable;
};

module.exports = postCategoriesSchema;