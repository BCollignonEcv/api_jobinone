const express = require('express');
const router = express.Router();

const controller = require('../controllers/scraper.controller');
const validator = require('../middlewares/validators/scraper.validator');

router.post('/', validator.validateJobBody, controller.scrape)
router.get('/', validator.validateJobParam, controller.scrape)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Scraper
 *   description: Scraper retrieval
 */

/**
 * @swagger
 * /api/scraper:
 *   post:
 *     summary: Get execution scrapper (requestBody)
 *     tags: [Scraper]
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
 *     tags: [Scrapers]
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
