const models = require("../models");
const User = models.User;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getUsers: (req, res) => {
        res.status(200);
    },
    getUser: (req, res) => {
        res.status(200);
    },
    createUser: (req, res) => {
        res.status(200);
    },
    updateUser: (req, res) => {
        res.status(200);    
    },
    deleteUser: (req, res) => {
        res.status(200);
    }
}