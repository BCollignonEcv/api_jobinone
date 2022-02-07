'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Datamodels', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUID
            },
            enable: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            public: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            requireProxy: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            body: {
                type: Sequelize.JSON,
                allowNull: false,
            },
            tag: {
                type: Sequelize.JSON,
                allowNull: false,
            },
            user: {
                type: Sequelize.UUIDV4,
            },
            category: {
                type: Sequelize.UUIDV4,
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
        await queryInterface.dropTable('Datamodels');
    }
};