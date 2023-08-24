'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoDeck = [
      {
        name:'test',
        user_id:1
      },
      {
        name:'a',
        user_id:1
      },
      {
        name:'jaozin1',
        user_id:2
      },
    ];

    await queryInterface.bulkInsert('decks', demoDeck, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('decks', null, {});
  }
};
