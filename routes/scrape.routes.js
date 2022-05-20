const express = require('express');
const router = express.Router();

const controller = require('../controllers/scrape.controller');
const validator = require('../middlewares/validators/job.validator');

router.post('/jobs', validator.validateJobBody, controller.scrape)
router.get('/jobs', validator.validateJobParam, controller.scrape)

module.exports = router;

