const basicSchemas = require('./schemas');

const Joi = require('joi');
const sourceSchema = {};

sourceSchema.id = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

sourceSchema.create = Joi.object().keys({
    enable: basicSchemas.booleanSchema.required(),
    name: basicSchemas.nameSchema.required(),
    baseUrl: basicSchemas.urlSchema.required(),
    location: basicSchemas.textSchema.required(),
    search: basicSchemas.textSchema.required(),
    jobOfferTag: basicSchemas.tagSchema.required(),
    titleTag: basicSchemas.tagSchema.required(),
    companyTag: basicSchemas.tagSchema.required(),
    urlTag: basicSchemas.tagSchema.required(),
    salaryTag: basicSchemas.tagSchema.required()
});

sourceSchema.update = Joi.object().keys({
    enable: basicSchemas.booleanSchema,
    name: basicSchemas.nameSchema,
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