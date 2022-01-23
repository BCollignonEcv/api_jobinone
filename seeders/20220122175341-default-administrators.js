'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        const roles = (await queryInterface.sequelize.query(`SELECT * from roles;`))[0];
        await queryInterface.bulkInsert('Administrators', [{
            id: uuidv4(),
            firstname: "Baptiste",
            lastname: "Collignon",
            email: "baptiste.collignon@mail-ecv.fr",
            username: "jio_sa",
            role: roles[0].id,
            password: await bcrypt.hash("jio_sadmin", 10),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: uuidv4(),
            firstname: "admin",
            lastname: "admin",
            email: "admin@mail-ecv.fr",
            username: "jio_a",
            role: roles[1].id,
            password: await bcrypt.hash("jio_admin", 10),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Administrators', null, {});
    }
};