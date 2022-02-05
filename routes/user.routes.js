var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

const userSchema = require('../schemas/user.schemas');
const validator = require('express-joi-validation').createValidator({})

router.post('/login', controller.authentificate)

router.get('/', auth.authenticateJWT, validator.params(userSchema.id), controller.getUsers)
router.get('/:id', auth.authenticateJWT, validator.params(userSchema.id), controller.getUser)
router.post('/', validator.body(userSchema.create), controller.createUser)
router.patch('/:id', auth.authenticateJWT, validator.body(userSchema.update), controller.updateUser)
router.delete('/:id', auth.authenticateJWT, validator.params(userSchema.id), controller.deleteUser)

module.exports = router;