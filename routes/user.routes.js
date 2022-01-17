var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');

const userSchema = require('../schemas/user.schemas');
const validator = require('express-joi-validation').createValidator({})

router.get('/', controller.getUsers)
router.get('/:id', validator.params(userSchema.id), controller.getUser)
router.post('/', validator.body(userSchema.create), controller.createUser)
router.patch('/:id', validator.body(userSchema.update), controller.updateUser)
router.delete('/:id', validator.params(userSchema.id), controller.deleteUser)

module.exports = router;