var express = require('express');
var router = express.Router();

const controller = require('../controllers/job.controller');

const jobSchema = require('../schemas/job.schemas');
const validator = require('express-joi-validation').createValidator({})

router.post('/', validator.body(jobSchema.search), controller.getJobs)

module.exports = router;