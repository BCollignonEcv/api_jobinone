const models = require("../../models");
const User = models.User;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { password } = require("pg/lib/defaults");

module.exports = {
    authentificate: async(req, res) => {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password
            }
            const user = await User.findOne({ where: { username: data.username } });
            
            // Check if user have been found
            if (user) { 
                if(await bcrypt.compare(data.password, user.password)) {
                    const accessToken = jwt.sign({ username: user.id, role: user.role }, process.env.SECRET_TOKEN_ADMIN);
                    const { password, ...userWithoutPassword } = user.dataValues;
                    res.json({ ...userWithoutPassword, accessToken });
                }else{
                    throw { message: `User or Password incorrect`, status: 401 };
                }
            }else{
                throw { message: `User or Password incorrect`, status: 401 };
            }
        } catch (error) {
            res.status(error.status || 500).send(error.message || "An error occured");
        }
    },
    // resetPassword: async(req, res) => {
    //     try {
    //         const data = {
    //             username: req.body.username || '',
    //             password: req.body.password || '',
    //             newPassword: req.body.newPassword || '',
    //             confirmPassword: req.body.confirmPassword || ''
    //         }
    //         if(data.password === data.confirmPassword){
    //             const user = await User.findOne({ where: { username: data.username } });
                    
    //             // Check if user have been found
    //             if (user) { 
    //                 if(await bcrypt.compare(data.password, user.password)) {
    //                     user.password = await bcrypt.hash(data.newPassword, 10);

    //                     const accessToken = jwt.sign({ username: user.id, role: user.role }, process.env.SECRET_TOKEN_ADMIN);
    //                     const { password, ...userWithoutPassword } = user.dataValues;
    //                     res.json({ ...userWithoutPassword, accessToken });
    //                 }else{
    //                     throw { message: `User or Password incorrect`, status: 401 };
    //                 }
    //             }else{
    //                 throw { message: `User or Password incorrect`, status: 401 };
    //             }
    //         }else{
    //             throw { message: `Password and confirmation need to be the same`, status: 401 };
    //         }
    //     } catch (error) {
    //         res.status(error.status || 500).send(error.message || "An error occured");
    //     }
    // },
    getUsers: async(req, res) => {
        try {
            const options = {};
            const data = await User.findAll();
            return res.status(302).json(data);
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    getUser: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await User.findByPk(id);
            if (data) {
                return res.status(302).json(data);
            } else {
                return res.status(404).send({
                    message: "User not found !"
                });
            }
        } catch (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    createUser: async(req, res) => {
        try {
            if (req.body.password === req.body.confirmPassword) {
                delete req.body.confirmPassword;
                let data = req.body;
                data.id = uuidv4();
                data.password = await bcrypt.hash(req.body.password, 10);
                let user = await User.create(data)
                if (user) {
                    const {password, ...userWithoutPassword} = user.dataValues;
                    const accessToken = jwt.sign({ username: user.id, role: user.role }, process.env.SECRET_TOKEN_ADMIN);
                    res.status(201).json({...userWithoutPassword, accessToken});
                } else {
                    throw { message: `Some error occurred while creating Users.` };
                }
            }else{
                throw { message: `Password need to be identic` };
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Users."
            });
        }
    },
    updateUser: async(req, res) => {
        try {
            const id = req.params.id;
            let data = await User.update(req.body, {
                where: { id: id }
            })
            if (data) {
                const user = await User.findByPk(id);
                if(user){
                    const {password, ...userWithoutPassword} = user.dataValues;
                    res.status(302).json({...userWithoutPassword});
                }
            } else {
                throw { message: `User cannot be found` };
            }
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        }
    },
    deleteUser: async(req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).send({
                    message: "ID can not be empty!"
                });
            }
            let data = await User.destroy({ where: { id: id } });
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