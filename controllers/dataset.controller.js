const models = require("../models");
const Dataset = models.Dataset;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getDatasets: async(req, res) => {
        try {
            let data = await Dataset.findAll({ where: { enable: true } });
            if (data) {
                res.status(302).json(data);
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Datasets."
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Datasets."
            });
        }
    },
    getDataset: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Dataset.findByPk(id);
            if (data) {
                res.status(302).json(data);
            } else {
                res.status(404).send({
                    message: "Dataset not found !"
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Dataset."
            });
        }
    },
    createDataset: async(req, res) => {
        try {
            let dataset = req.body;
            dataset.id = uuidv4();
            let data = await Dataset.create(dataset)
            if (data) {
                res.json(data);
            } else {
                throw `Some error occurred while creating Dataset.`;
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Dataset."
            });
        }
    },
    updateDataset: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Dataset.update(req.body, {
                where: { id: id }
            })
            if (data) {
                res.status(302).json(data);
            } else {
                res.status(404).send({
                    message: "Dataset not found !"
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating Dataset."
            });
        }
    },
    deleteDataset: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Dataset.destroy({ where: { id: id } });
            if (data === 1) {
                res.status(202).send({
                    message: "Dataset deleted !"
                });
            } else {
                res.status(404).send({
                    message: `Dataset not found !`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting Dataset."
            });
        }
    }
}