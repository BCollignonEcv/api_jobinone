var express = require('express');
var router = express.Router();

const controller = require('../controllers/datamodel.controller');
const auth = require('../middlewares/auth.middleware');

const datamodelSchema = require('../schemas/datamodel.schemas');
const validator = require('express-joi-validation').createValidator({})

// GET many Datamodels
router.get('/', controller.getDatamodels);

// GET one Datamodel
router.get('/:id', controller.getDatamodel);

// POST new Datamodel
router.post('/', controller.createDatamodel);

// EXECUTE one Datamodel
router.post('/:id', controller.executeDatamodel);

// PATCH one Datamodel
router.patch('/:id', controller.updateDatamodel);

// DELETE one Datamodel
router.delete('/:id', controller.deleteDatamodel);

// router.get('/:id', validator.params(datamodelSchema.id), controller.getDatamodel)
// router.post('/:id/search', validator.params(datamodelSchema.id), controller.executeDatamodel)
// router.post('/', validator.body(datamodelSchema.create), controller.createDatamodel)
// router.patch('/:id', validator.body(datamodelSchema.update), controller.updateDatamodel)
// router.delete('/:id', validator.params(datamodelSchema.id), controller.deleteDatamodel)

module.exports = router;