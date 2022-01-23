var express = require('express');
var router = express.Router();

const controller = require('../controllers/role.controller');

router.get('/', controller.getRoles)
router.get('/:id', controller.getRole)

module.exports = router;