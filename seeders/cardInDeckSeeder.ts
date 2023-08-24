'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoDeck = [
      {
        card_id:1,
        deck_id:1
      },
      {
        card_id:2,
        deck_id:1
      },
      {
        card_id:3,
        deck_id:1
      },
      {
        card_id:4,
        deck_id:1
      },
      {
        card_id:5,
        deck_id:1
      },
      {
        card_id:6,
        deck_id:1
      },
      {
        card_id:3,
        deck_id:2
      },
    ];

    await queryInterface.bulkInsert('card_in_decks', demoDeck, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('card_in_decks', null, {});
  }
};
