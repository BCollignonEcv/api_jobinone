const models = require("../models");
const Source = models.Source;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getSources: (req, res) => {
        res.status(200);
    },
    getSource: (req, res) => {
        res.status(200);
    },
    createSource: (req, res) => {
        res.status(200);
    },
    updateSource: (req, res) => {
        res.status(200);    
    },
    deleteSource: (req, res) => {
        res.status(200);
    }
}