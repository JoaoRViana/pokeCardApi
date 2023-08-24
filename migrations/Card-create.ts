'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('card', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attack: {
        type: Sequelize.INTEGER,
      },
      hp: {
        type: Sequelize.INTEGER,
      },
      sprite_on_board: {
        type: Sequelize.STRING
      },
      sprite_on_card: {
        type: Sequelize.STRING
      },
      name:{
        type: Sequelize.STRING
      },
      types:{
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('card');
  }
};