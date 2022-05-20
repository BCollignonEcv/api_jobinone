'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('DwellingSources', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            enable: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            baseUrl: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('DwellingSources');
    }
};