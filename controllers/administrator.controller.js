const models = require("../models");
const Administrator = models.Administrator;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    loginAdministrator: async(req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Administrator.findOne({ where: { username: username } });

            // Check if user have been found
            if (!user) {
                throw { message: `User or Password incorrect`, status: 401 };
            }
            const match = await bcrypt.compare(password, user.password);

            // Check if password is the good one
            if (!match) {
                throw { message: `User or Password incorrect`, errorStatus: 401 };
            }
            const accessToken = jwt.sign({ username: user.username }, process.env.SECRET_TOKEN_ADMIN);
            res.json({ accessToken });
        } catch (error) {
            res.status(error.status).send(error.message || "An error occured");
        }
    },
    getAdministrators: async(req, res) => {
        try {
            const options = {};
            const data = await Administrator.findAll();
            return res.status(302).json(data);
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    getAdministrator: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Administrator.findByPk(id);
            return res.status(302).json(data);
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    createAdministrator: async(req, res) => {
        try {
            if (req.body.password !== req.body.confirmPassword) {
                throw { message: `Password need to be identic` };
            }
            delete req.body.confirmPassword;
            let user = req.body;
            user.id = uuidv4();
            user.password = await bcrypt.hash(req.body.password, 10);
            let data = await Administrator.create(user)
            res.json(data);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Users."
            });
        }
    },
    updateAdministrator: async(req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).send({
                    message: "ID can not be empty!"
                });
            }
            let data = await Administrator.update(req.body, { where: { id: id } })
            res.status(302).json(data);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    deleteAdministrator: async(req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                throw { message: `Missing ID` };
            }
            let data = await Administrator.destroy({ where: { id: id } });
            if (data === 1) {
                res.status(202).send({
                    message: "User deleted !"
                });
            } else {
                res.status(404).send({
                    message: `User not found !`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting User."
            });
        }
    }
}