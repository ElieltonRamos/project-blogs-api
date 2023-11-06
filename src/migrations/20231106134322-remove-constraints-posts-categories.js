module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('posts_categories', 'posts_categories_ibfk_1');
    await queryInterface.removeConstraint('posts_categories', 'posts_categories_ibfk_2');

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('posts_categories', {
      fields: ['post_id'],
      type: 'foreign key',
      name: 'posts_categories_ibfk_1',
      references: {
        table: 'blog_posts',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('posts_categories', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'posts_categories_ibfk_2',
      references: {
        table: 'categories',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });
  },
};
