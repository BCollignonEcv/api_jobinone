const basicSchemas = require('./schemas');

const Joi = require('joi');
const datamodelSchema = {};

datamodelSchema.id = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

datamodelSchema.create = Joi.object().keys({
    enable: basicSchemas.booleanSchema.required(),
    user: basicSchemas.idSchema,
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

datamodelSchema.update = Joi.object().keys({
    enable: basicSchemas.booleanSchema,
    user: basicSchemas.idSchema,
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

module.exports = datamodelSchema;