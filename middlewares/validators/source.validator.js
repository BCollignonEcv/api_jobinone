const {body, param, validationResult} = require('express-validator');

exports.validateSourceRegistration = [
    body('enable').trim().escape().notEmpty().withMessage('enable is missing')
        .isBoolean().withMessage('should be a boolean'),
    body('name').trim().escape().notEmpty().withMessage('name is missing'),
    body('baseUrl').trim().escape().notEmpty().withMessage('baseUrl is missing'),
    body('location').trim().escape(),
    body('search').trim().escape().notEmpty().withMessage('search is missing'),
    body('jobContainer').trim().escape(),
    body('titleTag').trim().escape(),
    body('companyTag').trim().escape(),
    body('urlTag').trim().escape(),
    body('salaryTag').trim().escape(),
    body('locationTag').trim().escape(),
    body('dateTag').trim().escape(),
    body('descriptionTag').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];

exports.validateSourceEdition = [
    param('id').trim().escape().notEmpty().withMessage('id is missing')
        .isUUID(4).withMessage('id is not of UUIDV4 type'),
    body('enable').trim().escape().optional().notEmpty().withMessage('enable is missing')
        .isBoolean().withMessage('should be a boolean'),
    body('name').trim().escape().optional().notEmpty().withMessage('name is missing'),
    body('baseUrl').trim().escape().optional().notEmpty().withMessage('baseUrl is missing'),
    body('location').trim().escape().optional(),
    body('search').trim().escape().optional().notEmpty().withMessage('search is missing'),
    body('jobContainer').trim().escape().optional(),
    body('titleTag').trim().escape().optional(),
    body('companyTag').trim().escape().optional(),
    body('urlTag').trim().escape().optional(),
    body('salaryTag').trim().escape().optional(),
    body('locationTag').trim().escape().optional(),
    body('dateTag').trim().escape().optional(),
    body('descriptionTag').trim().escape().optional(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];
exports.validateSourceId = [
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