const Joi = require('joi');

const booleanSchema = Joi.boolean();

const idSchema = Joi.string().guid({ version: 'uuidv4' });

const nameSchema = Joi.string().min(6).max(20);

const textSchema = Joi.string().min(1);

const tagSchema = Joi.string().min(1);

const emailSchema = Joi.string().email();

const urlSchema = Joi.string().uri();

const dateSchema = Joi.date();


module.exports = {
    booleanSchema,
    nameSchema,
    textSchema,
    tagSchema,
    emailSchema,
    urlSchema,
    idSchema,
    dateSchema
};