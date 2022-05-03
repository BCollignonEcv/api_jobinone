const {body, param, validationResult} = require('express-validator');

exports.validateUserRegistration = [
    body('firstname').trim().escape().notEmpty().withMessage('firstname is missing'),
    body('lastname').trim().escape().notEmpty().withMessage('lastname is missing'),
    body('email').trim().escape().notEmpty().withMessage('email is missing')
        .isEmail().withMessage('should be an valid email format'),
    body('username').trim().escape().notEmpty().withMessage('username is missing'),
    body('password').trim().escape().notEmpty().withMessage('password is missing'),
    body('role').trim().escape().notEmpty().withMessage('role is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

exports.validateUserEdition = [
    param('id').trim().escape().notEmpty().withMessage('id is missing')
        .isUUID(4).withMessage('id is not of UUIDV4 type'),
    body('firstname').trim().escape().optional().notEmpty().withMessage('firstname is missing'),
    body('lastname').trim().escape().optional().notEmpty().withMessage('lastname is missing'),
    body('email').trim().escape().optional().notEmpty().withMessage('email is missing')
        .isEmail().withMessage('should be an valid email format'),
    body('username').trim().escape().optional().notEmpty().withMessage('username is missing'),
    param('id').trim().escape().notEmpty().withMessage('id is missing')
        .isUUID(4).withMessage('id is not of UUIDV4 type'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

exports.validateUserLogin = [
    body('username').trim().escape().notEmpty().withMessage('username is missing'),
    body('password').trim().escape().notEmpty().withMessage('password is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

exports.validateUserId = [
    param('id').trim().escape().notEmpty().withMessage('id is missing')
        .isUUID(4).withMessage('id is not of UUIDV4 type'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];