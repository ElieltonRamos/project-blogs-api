module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts_categories', 'post_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.changeColumn('posts_categories', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts_categories', 'post_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('posts_categories', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    });
  }
};
