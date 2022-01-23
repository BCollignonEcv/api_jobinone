const models = require("../models");
const Role = models.Role;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getRoles: async(req, res) => {
        try {
            let data = await Role.findAll();
            res.status(302).json(data);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Sources."
            });
        }
    },
    getRole: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Role.findByPk(id);
            res.status(302).json(data);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Source."
            });
        }
    }
}