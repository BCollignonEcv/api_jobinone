'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Datasets', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUIDV4,
                defaultValue: Sequelize.UUIDV4
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.UUIDV4
            },
            datamodels: {
                type: Sequelize.ARRAY(Sequelize.UUIDV4)
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
        await queryInterface.dropTable('Datasets');
    }
};