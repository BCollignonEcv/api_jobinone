var express = require('express');
var router = express.Router();

const controller = require('../controllers/role.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth.authenticateJWT, controller.getRoles)
router.get('/:id', auth.authenticateJWT, controller.getRole)

module.exports = router;