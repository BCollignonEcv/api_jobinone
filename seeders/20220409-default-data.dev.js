'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [{
            id: uuidv4(),
            firstname: "admin",
            lastname: "admin",
            email: "admin@admin.fr",
            username: "admin",
            password: await bcrypt.hash("admin", 10),
            role: "admin",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: uuidv4(),
            firstname: "fixer",
            lastname: "fixer",
            email: "fixer@fixer.fr",
            username: "fixer",
            password: await bcrypt.hash("fixer", 10),
            role: "fixer",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});

        await queryInterface.bulkInsert('JobSources', [{
                id: uuidv4(),
                enable: true,
                name: "Indeed",
                baseUrl: "https://fr.indeed.com/emplois",
                locationParam: "l",
                searchParam: "q",
                jobContainer: "div.mosaic-provider-jobcards > a",
                titleTag: "h2.jobTitle span[title]",
                companyTag: "span.companyName",
                salaryTag: "div.salary-snippet span",
                urlTag: "h2.jobTitle",
                locationTag: "div.companyLocation",
                dateTag: "span.date",
                descriptionTag: "div.job-snippet",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: uuidv4(),
                enable: false,
                name: "linkedin",
                baseUrl: "https://www.linkedin.com/jobs/search/",
                locationParam: "location",
                searchParam: "keywords",
                jobContainer: ".jobs-search-results__list > li.jobs-search-results__list-item",
                titleTag: "job-card-list__title",
                companyTag: "job-card-container__company-name",
                urlTag: "job-card-container__company-name",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
        await queryInterface.bulkDelete('JobSources', null, {});
        await queryInterface.bulkDelete('DwellingSources', null, {});
    }
};