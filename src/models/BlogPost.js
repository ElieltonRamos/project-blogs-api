const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },{
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  blogPostsTable.associate = ({ User }) => {
    blogPostsTable.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return blogPostsTable;
};

module.exports = blogPostsSchema;