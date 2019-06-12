'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'companies',
      'address',
      Sequelize.STRING,
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'companies',
      'address',
    )
  }
};
