'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('card_in_decks', {
      card_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
     deck_id:{
      allowNull: false,
      type: Sequelize.INTEGER
     }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('card_in_decks');
  }
};