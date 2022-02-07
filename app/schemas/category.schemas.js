const basicSchemas = require('./schemas');

const Joi = require('joi');
const categorySchema = {};

categorySchema.id = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

categorySchema.create = Joi.object().keys({
    name: basicSchemas.nameSchema.required(),
});

categorySchema.update = Joi.object().keys({
    name: basicSchemas.nameSchema.required(),
});

module.exports = categorySchema;