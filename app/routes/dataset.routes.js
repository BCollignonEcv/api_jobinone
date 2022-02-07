var express = require('express');
var router = express.Router();

const controller = require('../controllers/dataset.controller');
const auth = require('../middlewares/auth.middleware');

// const datasetSchema = require('../schemas/datamodel.schemas');
const validator = require('express-joi-validation').createValidator({})

// GET many Datasets
router.get('/', controller.getDatasets)

// GET one Dataset
router.get('/:id', controller.getDataset)

// POST one Dataset
router.post('/', controller.createDataset)

// EXECUTE one Dataset
router.post('/:id', controller.executeDataset)

// PATCH one Dataset
router.patch('/:id', controller.updateDataset)

// DELETE one Dataset
router.delete('/:id', controller.deleteDataset)

// router.get('/:id', validator.params(datamodelSchema.id), controller.getDatamodel)
// router.post('/', validator.body(datamodelSchema.create), controller.createDatamodel)
// router.post('/:id/search', validator.body(datamodelSchema.search), controller.searchDataset)
// router.patch('/:id', validator.body(datamodelSchema.update), controller.updateDatamodel)
// router.delete('/:id', validator.params(datamodelSchema.id), controller.deleteDatamodel)


module.exports = router;