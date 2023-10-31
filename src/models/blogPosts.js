const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('blog_posts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  blogPostsTable.associate = ({ users }) => {
    blogPostsTable.hasOne(users, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return blogPostsTable;
};

module.exports = blogPostsSchema;