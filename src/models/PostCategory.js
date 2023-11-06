const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },{
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  postCategoriesTable.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      through: postCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      onDelete: 'CASCADE',
    });
    Category.belongsToMany(BlogPost, {
      through: postCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };

  return postCategoriesTable;
};

module.exports = postCategoriesSchema;