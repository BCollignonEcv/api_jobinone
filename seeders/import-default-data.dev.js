'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            id: uuidv4(),
            firstname: "Baptiste",
            lastname: "Collignon",
            email: "baptiste.collignon@mail-ecv.fr",
            username: "admin",
            password: await bcrypt.hash("admin", 10),
            role: "superadmin",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        const user = await queryInterface.rawSelect('Users', {
            where: {
                email: 'baptiste.collignon@mail-ecv.fr',
            },
          }, ['id']);

        await queryInterface.bulkInsert('Categories', [{
            id: uuidv4(),
            name: "Jobs",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: uuidv4(),
            name: "Profile",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        const category = await queryInterface.rawSelect('Categories', {
            where: {
                name: 'Jobs',
            },
          }, ['id']);

        await queryInterface.bulkInsert('Datamodels', [{
            id: uuidv4(),
            enable: true,
            name: "Indeed",
            public: true,
            category: category,
            user: user,
            url: "https://fr.indeed.com/emplois",
            body: '{"location": "l", "search": "q"}',
            tag: '{ "jobOfferTag": "div.mosaic-provider-jobcards > a", "titleTag": "h2.jobTitle span[title]", "companyTag": "span.companyName", "salaryTag": "div.salary-snippet span",}',
            requireProxy: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

        const datamodel = await queryInterface.rawSelect('Datamodels', {
            where: {
                name: 'Indeed',
            },
          }, ['id']);

        await queryInterface.bulkInsert('Datasets', [{
            id: uuidv4(),
            name: "Jobs",
            category: category,
            description: "Le dataset Jobs recupère les offres d'emplois sur les plateformes ci-dessous en fonctionne de vos critères de recherche.",
            datamodels: [datamodel],
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