const {body, query, validationResult} = require('express-validator');

exports.validateJobBody = [
    body('location').trim().escape().notEmpty().withMessage('location is missing'),
    body('search').trim().escape().notEmpty().withMessage('search is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

exports.validateJobParam = [
    query('location').trim().escape().notEmpty().withMessage('location is missing'),
    query('search').trim().escape().notEmpty().withMessage('search is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];