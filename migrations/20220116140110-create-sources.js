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
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            baseurl: {
                allowNull: false,
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            search: {
                allowNull: false,
                type: Sequelize.STRING
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