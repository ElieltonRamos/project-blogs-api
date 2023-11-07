module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('blog_posts', 'blog_posts_ibfk_1');
    await queryInterface.changeColumn('blog_posts', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('blog_posts', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  }
};
