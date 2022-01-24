'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Sources', {
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
            location: {
                type: Sequelize.STRING
            },
            search: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            jobOfferTag: {
                type: Sequelize.STRING
            },
            titleTag: {
                type: Sequelize.STRING
            },
            companyTag: {
                type: Sequelize.STRING
            },
            urlTag: {
                type: Sequelize.STRING
            },
            salaryTag: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Sources');
    }
};