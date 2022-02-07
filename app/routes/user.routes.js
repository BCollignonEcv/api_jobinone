var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

const schema = require('../schemas/user.schemas');
const validator = require('express-joi-validation').createValidator({})

// LOGIN one User
router.post('/login', controller.authentificate)

// GET many Users
router.get('/', controller.getUsers)

// GET one User
router.get('/:id', controller.getUser)

// POST one User
router.post('/', controller.createUser)

// PATCH one User
router.patch('/:id', controller.updateUser)

// DELETE one User
router.delete('/:id', controller.deleteUser)

// router.get('/', auth.authenticateJWT, validator.params(schema.id), controller.getUsers)
// router.get('/:id', auth.authenticateJWT, validator.params(schema.id), controller.getUser)
// router.post('/', validator.body(schema.create), controller.createUser)
// router.patch('/:id', auth.authenticateJWT, validator.body(schema.update), controller.updateUser)
// router.delete('/:id', auth.authenticateJWT, validator.params(schema.id), controller.deleteUser)

module.exports = router;