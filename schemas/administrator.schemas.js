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
    role: basicSchemas.idSchema.required(),
    password: basicSchemas.nameSchema.required().strict(),
    confirmPassword: basicSchemas.nameSchema.valid(Joi.ref('password')).required().strict()
});

userSchema.update = Joi.object().keys({
    firstname: basicSchemas.nameSchema,
    lastname: basicSchemas.nameSchema,
    username: basicSchemas.nameSchema,
    email: basicSchemas.emailSchema,
    role: basicSchemas.idSchema,
    password: basicSchemas.nameSchema,
    confirmPassword: basicSchemas.nameSchema.valid(Joi.ref('password'))
});

module.exports = userSchema;