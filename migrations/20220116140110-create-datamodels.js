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
                allowNull: false,
            },
            public: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            user: {
                type: Sequelize.UUID,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category: {
                type: Sequelize.UUIDV4,
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            body: {
                type: Sequelize.JSON,
                allowNull: false,
            },
            tag: {
                type: Sequelize.JSON,
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
        await queryInterface.dropTable('Datamodels');
    }
};