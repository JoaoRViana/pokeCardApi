'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     name:{
      type:Sequelize.STRING
     },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('decks');
  }
};