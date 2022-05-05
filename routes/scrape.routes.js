const express = require('express');
const router = express.Router();

const controller = require('../controllers/scrape.controller');
const validator = require('../middlewares/validators/job.validator');

router.post('/', validator.validateJobBody, controller.scrape)
router.get('/', validator.validateJobParam, controller.scrape)

module.exports = router;

