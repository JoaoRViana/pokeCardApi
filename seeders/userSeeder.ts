'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoUser = [
      {
        user_name:'Desumillde',
        password:'password'
      },
      {
        user_name:'jaozin',
        password:'jao'
      },
      
    ];

    await queryInterface.bulkInsert('users', demoUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
