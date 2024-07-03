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
        username: 'Demo-User',
        email: 'HireMe@YourCompany.io',
        hashedPassword: bcrypt.hashSync('YouWontRegretIt'),
      },
      {
        username: "Long50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        email: "Long50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWLong50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWLong50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWLong50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWLong50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW@tec.io",
        hashedPassword: bcrypt.hashSync('Security-Matters'),
      }
    ],
    { validate: true })
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['Demo-User', 'Long50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW']
      }
    }, {})
  }
};

