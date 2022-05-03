const express = require('express');
const router = express.Router();

const controller = require('../controllers/job.controller');
const validator = require('../middlewares/validators/job.validator');

router.post('/', validator.validateJobBody, controller.executeJob)
router.get('/', validator.validateJobParam, controller.executeJob)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job retrieval
 */

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Get jobs with scrapper (requestBody)
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               location:
 *                 type: string
 *               search:
 *                 type: string
 *             example:
 *               location: Paris
 *               search: Developpeur Web
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get jobs with scrapper (query params)
 *     tags: [Jobs]
 *     parameters:
 *       - in: query
 *         name: location
 *         required: true
 *         schema:
 *           type: string
 *         description: Job location
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *         description: Job search
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */
