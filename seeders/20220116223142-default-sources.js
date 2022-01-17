'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sources', [
    {
      id: uuidv4(),
      name: "Indeed",
      baseUrl: "https://fr.indeed.com/emplois",
      location: "l",
      search: "q",
      jobOfferTag: "mosaic-provider-jobcards a",
      titleTag: "title",
      companyTag: "companyName",
      urlTag: "",
      salaryTag: "salary-snippet",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: "linkedin",
      baseUrl: "https://www.linkedin.com/jobs/search/",
      location: "location",
      search: "keywords",
      jobOfferTag: "jobs-search-results__list li",
      titleTag: "job-card-list__title",
      companyTag: "job-card-container__company-name",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sources', null, {});
  }
};
