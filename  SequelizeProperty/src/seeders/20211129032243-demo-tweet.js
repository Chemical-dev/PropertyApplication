'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Tweets", [
      {
        twit: "sco pa tu mana",
        comment: "Hailey's mother is prisoner",
        createdAt: new Date(),
        updatedAt:  new Date(),
      },
      {
        twit: "sco pa tu mana",
        comment: "Hailey's mother is an enforcer",
        createdAt: new Date(),
        updatedAt:  new Date(),
      },
      {
        twit: "sco pa tu mana",
        comment: "Hailey's mother is a dunce",
        createdAt: new Date(),
        updatedAt:  new Date(),
      },
      {
        twit: "sco pa tu mana",
        comment: "Hailey's mother is hailet",
        createdAt: new Date(),
        updatedAt:  new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
