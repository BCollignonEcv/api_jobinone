const basicSchemas = require('./schemas');

const Joi = require('joi');
const jobSchema = {};

jobSchema.search = Joi.object().keys({
    location: basicSchemas.textSchema,
    search: basicSchemas.textSchema,
    jobOfferTag : basicSchemas.tagSchema,
    titleTag: basicSchemas.tagSchema,
    companyTag: basicSchemas.tagSchema,
    urlTag: basicSchemas.tagSchema,
    salaryTag: basicSchemas.tagSchema
});

module.exports = jobSchema;