const models = require("../models");
const User = models.User;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
    getUsers: async (req, res) => {
        try{
            let data = await User.findAll();
            if(data){
                res.status(302).json(data);
            }else{
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving Users."
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    getUser: async (req, res) => {
        try{
            const id = req.params.id;
            let data = await User.findByPk(id);
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "User not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    createUser: async (req, res) => {
        try{
            if(req.body.password !== req.body.passwordConfirm){
                throw `Password need to be identic`;
            }
            delete req.body.passwordConfirm;
            let user = req.body;
            user.id = uuidv4();
            user.password = bcrypt.hash(req.body.password, 10, function(err, hash) {
                return hash;
            });
            console.log(user)
            let data = await User.create(user)
            if(data){
                res.json(data);
            }else{
                throw `Some error occurred while creating Users.`;
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating Users."
            });
        }
    },
    updateUser: async (req, res) => {
        try{
            const id = req.params.id;
            if(!id){
                res.status(400).send({
                    message: "ID can not be empty!"
                });
            }
            let data = await User.update(req.body, {
                where: {id: id}
            })
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "User not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            if(!id){
                res.status(400).send({
                    message: "ID can not be empty!"
                });
            }
            let data = await User.destroy({where: { id: id }});
            if(data === 1){
                res.status(202).send({
                    message: "User deleted !"
                });
            }else{
                res.status(404).send({
                    message: `User not found !`
                });
            }  
        } catch (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while deleting User."
            });
        }
    }
}