const models = require("../../models");
const Category = models.Category;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getCategories: async(req, res) => {
        try {
            const options = {};
            const data = await Category.findAll();
            return res.status(302).json(data);
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Categories."
            });
        }
    },
    getCategory: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Category.findByPk(id);
            if (data) {
                return res.status(302).json(data);
            } else {
                return res.status(404).send({
                    message: "Category not found !"
                });
            }
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Category."
            });
        }
    },
    createCategory: async(req, res) => {
        try {
            const category = req.body;
            category.id = uuidv4();
            let data = await Category.create(category)
            if (data) {
                res.status(201).json(data);
            } else {
                throw `Some error occurred while creating Category.`;
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Category."
            });
        }
    },
    updateCategory: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await Category.update(req.body, {
                where: { id: id }
            })
            if (data) {
                const category = await Category.findByPk(id);
                if(category){
                    res.status(302).json(category);
                }
            } else {
                throw { message: `Category cannot be found` };
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Category."
            });
        }
    },
    deleteCategory: async(req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).send({
                    message: "ID can not be empty!"
                });
            }
            let data = await Category.destroy({ where: { id: id } });
            if (data === 1) {
                res.status(202).send({
                    message: "Category deleted !"
                });
            } else {
                res.status(404).send({
                    message: `Category not found !`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting Category."
            });
        }
    }
}