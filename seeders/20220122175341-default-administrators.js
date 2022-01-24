'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Administrators', [{
            id: uuidv4(),
            firstname: "Baptiste",
            lastname: "Collignon",
            email: "baptiste.collignon@mail-ecv.fr",
            username: "jio_sa",
            role: "98f9bdc0-c1ba-4187-beea-2bcf099ad819",
            password: await bcrypt.hash("jio_sadmin", 10),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Administrators', null, {});
    }
};