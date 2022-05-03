const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');
const validator = require('../middlewares/validators/user.validator')
const auth = require('../middlewares/authentification/auth.middleware');

router.post('/login', validator.validateUserLogin, controller.loginUser)

router.get('/', auth.authenticate, auth.authorize(["admin"]), controller.getUsers)
router.get('/:id', auth.authenticate, validator.validateUserId, controller.getUser)
router.post('/', auth.authenticate, auth.authorize(["admin"]), validator.validateUserRegistration, controller.createUser)
router.patch('/:id', auth.authenticate, auth.authorize(["admin"]), validator.validateUserEdition, controller.updateUser)
router.delete('/:id', auth.authenticate, auth.authorize(["admin"]), validator.validateUserId, controller.deleteUser)

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /admin/users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lasname
 *               - email
 *               - username
 *               - password
 *               - role
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *               role:
 *                 type: id
 *             example:
 *               firstname: example
 *               lastname: example
 *               email: example@example.com
 *               username: example
 *               password: password1
 *               role: RoleId
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *                     $ref: '#/components/schemas/User'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /admin/users/{id}:
 *   get:
 *     summary: Get a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: User id
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *               role:
 *                 type: id
 *             example:
 *               firstname: example
 *               lastname: example
 *               email: example@example.com
 *               username: example
 *               password: password1
 *               role: RoleId
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: User id
 *     responses:
 *       "202":
 *         description: No content
 *       "400":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
