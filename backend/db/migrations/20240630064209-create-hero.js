'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      resourceName: {
        type: Sequelize.ENUM,
        allowNull: true,
      },
      resourceAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      hitPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      physicalArmor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      magicalResistance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      moveSpeed: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heros');
  }
};