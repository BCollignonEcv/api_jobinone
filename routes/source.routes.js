const express = require('express');
const router = express.Router();

const controller = require('../controllers/source.controller');
const auth = require('../middlewares/authentification/auth.middleware');
const validator = require('../middlewares/validators/source.validator')

router.get('/', controller.getSources)

router.get('/jobs', controller.getSources)
router.get('/jobs/:id', validator.validateSourceId, controller.getSource)
router.post('/jobs', auth.authenticate, auth.authorize(["admin"]), validator.validateSourceRegistration, controller.createSource)
router.patch('/jobs/:id', auth.authenticate, auth.authorize(["admin", "fixer"]), validator.validateSourceEdition, controller.updateSource)
router.delete('/jobs/:id', auth.authenticate, auth.authorize(["admin"]), validator.validateSourceId, controller.deleteSource)

router.get('/dwellings', controller.getSources)
router.get('/dwellings/:id', validator.validateSourceId, controller.getSource)
router.post('/dwellings', auth.authenticate, auth.authorize(["admin"]), validator.validateSourceRegistration, controller.createSource)
router.patch('/dwellings/:id', auth.authenticate, auth.authorize(["admin", "fixer"]), validator.validateSourceEdition, controller.updateSource)
router.delete('/dwellings/:id', auth.authenticate, auth.authorize(["admin"]), validator.validateSourceId, controller.deleteSource)

module.exports = router;