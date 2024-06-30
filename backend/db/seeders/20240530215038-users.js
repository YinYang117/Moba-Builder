'use strict';
const { User } = require('../models');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([

      {
        username: '12345',
        email: 'a@i.io',
        hashedPassword: bcrypt.hashSync('12345'),
      },
      {
        username: '1234567890',
        email: 'a6789@i.io',
        hashedPassword: bcrypt.hashSync('1234567890'),
      },

    ],
    { validate: true })
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['Demo-User', 'vs', 'Long50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW']
      }
    }, {})
  }
};

