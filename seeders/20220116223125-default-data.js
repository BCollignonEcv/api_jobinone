'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = await queryInterface.bulkInsert('Roles', [{
        id: uuidv4(),
        name: "Super Admin",
        disableSource: true,
        createSource: true,
        updateSource: true,
        deleteSource: true,
        createUser: true,
        updateUser: true,
        deleteUser: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: uuidv4(),
        name: "Admin",
        disableSource: true,
        createSource: true,
        updateSource: true,
        deleteSource: false,
        createUser: true,
        updateUser: true,
        deleteUser: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: uuidv4(),
        name: "Fixer",
        disableSource: true,
        createSource: false,
        updateSource: true,
        deleteSource: false,
        createUser: false,
        updateUser: true,
        deleteUser: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {returning: true});

    await queryInterface.bulkInsert('Administrators', [{
        id: uuidv4(),
        firstname: "Baptiste",
        lastname: "Collignon",
        email: "baptiste.collignon@mail-ecv.fr",
        username: "jio_sa",
        role: roles[0].id,
        password: await bcrypt.hash("jio_sadmin", 10),
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Users', [{
        id: uuidv4(),
        firstname: "Baptiste",
        lastname: "Collignon",
        email: "baptiste.collignon@mail-ecv.fr",
        username: "shenor",
        password: await bcrypt.hash("baptiste", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        firstname: "admin",
        lastname: "admin",
        email: "admin@mail-ecv.fr",
        username: "admin",
        password: await bcrypt.hash("admin", 10),
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Sources', [{
        id: uuidv4(),
        enable: true,
        name: "Indeed",
        baseUrl: "https://fr.indeed.com/emplois",
        location: "l",
        search: "q",
        jobOfferTag: "div.mosaic-provider-jobcards > a",
        titleTag: "h2.jobTitle span[title]",
        companyTag: "span.companyName",
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
    await queryInterface.bulkDelete('Roles', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Sources', null, {});
    await queryInterface.bulkDelete('Administrators', null, {});
  }
};
