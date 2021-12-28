'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tracks', { 
      id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      author_id: Sequelize.INTEGER,
      thumbnail: Sequelize.STRING,
      length: Sequelize.INTEGER,
      modules_count: Sequelize.INTEGER,
      created_at: Sequelize.STRING,
      updated_at: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tracks');
  },
};
