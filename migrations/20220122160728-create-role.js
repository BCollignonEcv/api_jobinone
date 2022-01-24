'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Roles', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            name: {
                type: Sequelize.STRING,
                unique:  true
            },
            disableSource: {
                type: Sequelize.BOOLEAN
            },
            createSource: {
                type: Sequelize.BOOLEAN
            },
            updateSource: {
                type: Sequelize.BOOLEAN
            },
            deleteSource: {
                type: Sequelize.BOOLEAN
            },
            createUser: {
                type: Sequelize.BOOLEAN
            },
            updateUser: {
                type: Sequelize.BOOLEAN
            },
            deleteUser: {
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('Roles');
    }
};