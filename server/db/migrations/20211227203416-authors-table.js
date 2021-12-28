'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      photo: Sequelize.STRING,
      created_at: Sequelize.STRING,
      updated_at: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('authors');
  },
};
