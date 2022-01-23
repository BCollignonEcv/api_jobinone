'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Roles', [{
                id: uuidv4(),
                name: "Super Admin",
                disableSource: true,
                createSource: true,
                updateSource: true,
                deleteSource: true,
                createUser: true,
                updateUser: true,
                deleteUser: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: uuidv4(),
                name: "Admin",
                disableSource: true,
                createSource: true,
                updateSource: true,
                deleteSource: false,
                createUser: true,
                updateUser: true,
                deleteUser: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: uuidv4(),
                name: "Fixer",
                disableSource: true,
                createSource: false,
                updateSource: true,
                deleteSource: false,
                createUser: false,
                updateUser: true,
                deleteUser: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Roles', null, {});
    }
};