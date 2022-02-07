var express = require('express');
var router = express.Router();

const controller = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');

const schema = require('../schemas/category.schemas');
const validator = require('express-joi-validation').createValidator({})

// GET many Categories
router.get('/', controller.getCategories)

// GET one Category
router.get('/:id',  controller.getCategory)

// POST one Category
router.post('/', controller.createCategory)

// PATCH one Category
router.patch('/:id', controller.updateCategory)

// DELETE one Category
router.delete('/:id', controller.deleteCategory)

// router.get('/', validator.params(schema.id), controller.getCategories)
// router.get('/:id', validator.params(schema.id), controller.getCategory)
// router.post('/', auth.authenticateJWT, validator.body(schema.create), controller.createCategory)
// router.patch('/:id', auth.authenticateJWT, validator.body(schema.update), controller.updateCategory)
// router.delete('/:id', auth.authenticateJWT, validator.params(schema.id), controller.deleteCategory)

module.exports = router;