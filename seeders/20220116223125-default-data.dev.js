'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Roles', [{
            id: uuidv4(),
            name: "Super Admin",
            disableDatamodel: true,
            createDatamodel: true,
            updateDatamodel: true,
            deleteDatamodel: true,
            disableDataset: true,
            createDataset: true,
            updateDataset: true,
            deleteDataset: true,
            createUser: true,
            updateUser: true,
            deleteUser: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        await queryInterface.bulkInsert('Users', [{
            id: uuidv4(),
            firstname: "Baptiste",
            lastname: "Collignon",
            email: "baptiste.collignon@mail-ecv.fr",
            username: "jio_sa",
            password: await bcrypt.hash("jio_sadmin", 10),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        await queryInterface.bulkInsert('Categories', [{
            id: uuidv4(),
            name: "Jobs",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        await queryInterface.bulkInsert('Datamodels', [{
            id: uuidv4(),
            enable: true,
            name: "Indeed",
            public: true,
            url: "https://fr.indeed.com/emplois",
            body: '{"location": "l", "search": "q"}',
            tag: '{ "jobOfferTag": "div.mosaic-provider-jobcards > a", "titleTag": "h2.jobTitle span[title]", "companyTag": "span.companyName", "salaryTag": "div.salary-snippet span",}',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        await queryInterface.bulkInsert('Datasets', [{
            id: uuidv4(),
            name: "Jobs",
            description: "Le dataset Jobs recupère les offres d'emplois sur les plateformes ci-dessous en fonctionne de vos critères de recherche.",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Roles', null, {});
        await queryInterface.bulkDelete('Users', null, {});
        await queryInterface.bulkDelete('Categories', null, {});
        await queryInterface.bulkDelete('Datamodels', null, {});
        await queryInterface.bulkDelete('Datasets', null, {});
    }
};