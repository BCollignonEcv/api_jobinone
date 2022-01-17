'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        firstname: "Baptiste",
        lastname: "Collignon",
        email: "baptiste.collignon@mail-ecv.fr",
        username: "shenor",
        password: await bcrypt.hash("baptiste", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        firstname: "admin",
        lastname: "admin",
        email: "admin@mail-ecv.fr",
        username: "admin",
        password: await bcrypt.hash("admin", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
