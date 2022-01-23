const basicSchemas = require('./schemas');

const Joi = require('joi');
const sourceSchema = {};

sourceSchema.id = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

sourceSchema.create = Joi.object().keys({
    enable: basicSchemas.booleanSchema.required(),
    name: basicSchemas.textSchema.required(),
    baseUrl: basicSchemas.urlSchema.required(),
    location: basicSchemas.textSchema.required(),
    search: basicSchemas.textSchema.required(),
    jobOfferTag: basicSchemas.tagSchema,
    titleTag: basicSchemas.tagSchema,
    companyTag: basicSchemas.tagSchema,
    urlTag: basicSchemas.tagSchema,
    salaryTag: basicSchemas.tagSchema
});

sourceSchema.update = Joi.object().keys({
    enable: basicSchemas.booleanSchema,
    name: basicSchemas.textSchema,
    baseUrl: basicSchemas.urlSchema,
    location: basicSchemas.textSchema,
    search: basicSchemas.textSchema,
    jobOfferTag: basicSchemas.tagSchema,
    titleTag: basicSchemas.tagSchema,
    companyTag: basicSchemas.tagSchema,
    urlTag: basicSchemas.tagSchema,
    salaryTag: basicSchemas.tagSchema
});

module.exports = sourceSchema;