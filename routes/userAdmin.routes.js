var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

const userSchema = require('../schemas/user.schemas');
const validator = require('express-joi-validation').createValidator({})

router.post('/login', controller.loginUser)

router.get('/', auth.authenticateAdminJWT, controller.getUsers)
router.get('/:id', auth.authenticateAdminJWT, validator.params(userSchema.id), controller.getUser)
router.post('/', auth.authenticateAdminJWT, validator.body(userSchema.create), controller.createUser)
router.patch('/:id', auth.authenticateAdminJWT, validator.body(userSchema.update), controller.updateUser)
router.delete('/:id', auth.authenticateAdminJWT, validator.params(userSchema.id), controller.deleteUser)

module.exports = router;