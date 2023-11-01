const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('blog_posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  blogPostsTable.associate = ({ User }) => {
    blogPostsTable.hasOne(User, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return blogPostsTable;
};

module.exports = blogPostsSchema;