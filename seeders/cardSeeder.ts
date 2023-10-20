'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoCards = [
      {
        name: 'bulbasaur',
        user_id: 1, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'grass_poison',
      },
      {
        name: 'charmander',
        user_id: 1, 
        attack: 80,
        hp: 80,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'fire',
      },
      {
        name: 'squitle',
        user_id: 1, 
        attack: 40,
        hp: 140,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'water',
      },
      {
        name: 'pikachu',
        user_id: 1, 
        attack: 60,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'electric',
      },
      {
        name: 'pidgey',
        user_id: 1, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'normal_flying',
      },
      {
        name: 'ratata',
        user_id: 1, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'normal',
      },      {
        name: 'bulbasaur',
        user_id: 2, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'grass_poison',
      },
      {
        name: 'charmander',
        user_id: 2, 
        attack: 80,
        hp: 80,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'fire',
      },
      {
        name: 'squitle',
        user_id: 1, 
        attack: 40,
        hp: 140,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'water',
      },
      {
        name: 'pikachu',
        user_id: 2, 
        attack: 60,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'electric',
      },
      {
        name: 'pidgey',
        user_id: 2, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'normal_flying',
      },
      {
        name: 'ratata',
        user_id: 2, 
        attack: 50,
        hp: 100,
        sprite_on_board: 'sprite1-board.png',
        sprite_on_card: 'sprite1-card.png',
        types: 'normal',
      },
    ];

    await queryInterface.bulkInsert('cards', demoCards, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cards', null, {});
  }
};
