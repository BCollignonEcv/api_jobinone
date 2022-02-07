const basicSchemas = require('./schemas');

const Joi = require('joi');
const userSchema = {};

userSchema.id = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

userSchema.create = Joi.object().keys({
    firstname: basicSchemas.nameSchema.required(),
    lastname: basicSchemas.nameSchema.required(),
    username: basicSchemas.nameSchema.required(),
    email: basicSchemas.emailSchema.required(),
    password: basicSchemas.nameSchema.required().strict(),
    confirmPassword: basicSchemas.nameSchema.valid(Joi.ref('password')).required().strict(),
    role: basicSchemas.nameSchema,
});

userSchema.update = Joi.object().keys({
    firstname: basicSchemas.nameSchema,
    lastname: basicSchemas.nameSchema,
    username: basicSchemas.nameSchema,
    email: basicSchemas.emailSchema,
    password: basicSchemas.nameSchema,
    confirmPassword: basicSchemas.nameSchema.valid(Joi.ref('password')),
    role: basicSchemas.nameSchema,
});

module.exports = userSchema;