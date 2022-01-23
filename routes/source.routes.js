var express = require('express');
var router = express.Router();

const controller = require('../controllers/source.controller');
const auth = require('../middlewares/auth.middleware');

const sourceSchema = require('../schemas/source.schemas');
const validator = require('express-joi-validation').createValidator({})

router.get('/', auth.authenticateAdminJWT, controller.getSources)
router.get('/:id', auth.authenticateAdminJWT, validator.params(sourceSchema.id), controller.getSource)
router.post('/', auth.authenticateAdminJWT, validator.body(sourceSchema.create), controller.createSource)
router.patch('/:id', auth.authenticateAdminJWT, validator.body(sourceSchema.update), controller.updateSource)
router.delete('/:id', auth.authenticateAdminJWT, validator.params(sourceSchema.id), controller.deleteSource)

module.exports = router;