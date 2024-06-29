'use strict';
const { User } = require('../models');
const bcrypt = require('bcryptjs')

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
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('Famous-People'),
      },
      {
        username: 'vs',
        email: '1.o',
        hashedPassword: bcrypt.hashSync('1'),
      },
      {
        username: 'Long50WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
        email: '12345678902234578903234567890423456789052345678906234567890723456789082345678909234567896102938409812734098612867091265349081672387456102963458076123094867128076345091867234587061209634580761408956708127364508716234058761287345689237458716018792645@longio',
        hashedPassword: bcrypt.hashSync('super-long-passwords-are-very-secure-and-long-to-hash-them-though-makes-them-all-the-same-length'),
      }
    ], { validate: true })
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

