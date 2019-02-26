'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WarframeAbilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passive: {
        type: Sequelize.INTEGER
      },
      ability1: {
        type: Sequelize.INTEGER
      },
      ability2: {
        type: Sequelize.INTEGER
      },
      ability3: {
        type: Sequelize.INTEGER
      },
      ultimate: {
        type: Sequelize.INTEGER
      },
      warframeid: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WarframeAbilities');
  }
};