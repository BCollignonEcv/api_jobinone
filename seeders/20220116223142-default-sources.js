'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sources', [
    {
      id: uuidv4(),
      enable: true,
      name: "Indeed",
      baseUrl: "https://fr.indeed.com/emplois",
      location: "l",
      search: "q",
      jobOfferTag: "div.mosaic-provider-jobcards > a",
      titleTag: "h2.jobTitle span[title]",
      companyTag: "span.companyName",
      urlTag: "",
      salaryTag: "div.salary-snippet span",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      enable: false,
      name: "linkedin",
      baseUrl: "https://www.linkedin.com/jobs/search/",
      location: "location",
      search: "keywords",
      jobOfferTag: ".jobs-search-results__list > li.jobs-search-results__list-item",
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
