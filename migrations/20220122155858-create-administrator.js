'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Administrators', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            username: {
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                type: Sequelize.STRING
            },
            role: {
                type: Sequelize.UUID
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
        await queryInterface.dropTable('Administrators');
    }
};