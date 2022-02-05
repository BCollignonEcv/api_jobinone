var express = require('express');
var router = express.Router();

const controller = require('../controllers/datamodel.controller');
const auth = require('../middlewares/auth.middleware');

const datamodelSchema = require('../schemas/datamodel.schemas');
const validator = require('express-joi-validation').createValidator({})

router.get('/', controller.getDatamodels)
router.get('/:id', validator.params(datamodelSchema.id), controller.getDatamodel)
router.post('/', validator.body(datamodelSchema.create), controller.createDatamodel)
router.patch('/:id', validator.body(datamodelSchema.update), controller.updateDatamodel)
router.delete('/:id', validator.params(datamodelSchema.id), controller.deleteDatamodel)

module.exports = router;