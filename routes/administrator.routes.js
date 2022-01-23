var express = require('express');
var router = express.Router();

const controller = require('../controllers/administrator.controller');
const auth = require('../middlewares/auth.middleware');

const administratorSchema = require('../schemas/administrator.schemas');
const validator = require('express-joi-validation').createValidator({})

router.post('/login', controller.loginAdministrator)

router.get('/', auth.authenticateAdminJWT, controller.getAdministrators)
router.get('/:id', auth.authenticateAdminJWT, validator.params(administratorSchema.id), controller.getAdministrator)
router.post('/', auth.authenticateAdminJWT, validator.body(administratorSchema.create), controller.createAdministrator)
router.patch('/:id', auth.authenticateAdminJWT, validator.body(administratorSchema.update), controller.updateAdministrator)
router.delete('/:id', auth.authenticateAdminJWT, validator.params(administratorSchema.id), controller.deleteAdministrator)

module.exports = router;