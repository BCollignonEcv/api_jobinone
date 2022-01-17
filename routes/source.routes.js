var express = require('express');
var router = express.Router();

const controller = require('../controllers/source.controller');

const sourceSchema = require('../schemas/source.schemas');
const validator = require('express-joi-validation').createValidator({})

router.get('/', controller.getSources)
router.get('/:id', validator.params(sourceSchema.id), controller.getSource)
router.post('/', validator.body(sourceSchema.create), controller.createSource)
router.patch('/:id', validator.body(sourceSchema.update), controller.updateSource)
router.delete('/:id', validator.params(sourceSchema.id), controller.deleteSource)

module.exports = router;