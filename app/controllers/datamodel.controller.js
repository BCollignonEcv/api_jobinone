const models = require("../../models");
const Datamodel = models.Datamodel;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    executeDatamodel: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Datamodel.findByPk(id);
            if (data) {
                res.status(302).json(data);
            } else {
                throw { message: `Some error occurred while retrieving Datamodels.` };
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Datamodels."
            });
        }
    },
    getDatamodels: async(req, res) => {
        try {
            let data = await Datamodel.findAll();
            if (data) {
                res.status(302).json(data);
            } else {
                throw { message: `Some error occurred while retrieving Datamodels.` };
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Datamodel."
            });
        }
    },
    getDatamodel: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Datamodel.findByPk(id);
            if (data) {
                res.status(302).json(data);
            } else {
                res.status(404).send({
                    message: "Datamodel not found !"
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Datamodel."
            });
        }
    },
    createDatamodel: async(req, res) => {
        try {
            const datamodel = req.body;
            datamodel.id = uuidv4();
            let data = await Datamodel.create(datamodel)
            if (data) {
                res.status(201).json(data);
            } else {
                throw `Some error occurred while creating Datamodel.`;
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Datamodel."
            });
        }
    },
    updateDatamodel: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Datamodel.update(req.body, {
                where: { id: id }
            })
            if (data) {
                res.status(302).json(data);
            } else {
                res.status(404).send({
                    message: "Datamodel not found !"
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating Datamodel."
            });
        }
    },
    deleteDatamodel: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Datamodel.destroy({ where: { id: id } });
            if (data === 1) {
                res.status(202).send({
                    message: "Datamodel deleted !"
                });
            } else {
                res.status(404).send({
                    message: `Datamodel not found !`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting Datamodel."
            });
        }
    }
}