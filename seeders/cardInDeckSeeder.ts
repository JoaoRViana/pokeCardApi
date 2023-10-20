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
        card_id:1,
        deck_id:2
      },
      {
        card_id:2,
        deck_id:2
      },
      {
        card_id:3,
        deck_id:2
      },
      {
        card_id:4,
        deck_id:2
      },
      {
        card_id:5,
        deck_id:2
      },
      {
        card_id:6,
        deck_id:2
      },      
      {
        card_id:7,
        deck_id:3
      },
      {
        card_id:8,
        deck_id:3
      },
      {
        card_id:9,
        deck_id:3
      },
      {
        card_id:10,
        deck_id:3
      },
      {
        card_id:11,
        deck_id:3
      },
      {
        card_id:12,
        deck_id:3
      },
    ];

    await queryInterface.bulkInsert('card_in_decks', demoDeck, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('card_in_decks', null, {});
  }
};
