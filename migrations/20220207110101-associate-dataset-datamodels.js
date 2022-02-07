'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Dataset_Datamodels', {
      datasetID: {
          type: Sequelize.UUIDV4,
          allowNull: false
      },
      datamodelID: {
        type: Sequelize.UUIDV4,
        allowNull: false
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Dataset_Datamodels');
  }
};
