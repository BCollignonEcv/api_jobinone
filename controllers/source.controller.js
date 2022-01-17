const models = require("../models");
const Source = models.Source;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getSources: async (req, res) => {
        try{
            let data = await Source.findAll();
            if(data){
                res.status(302).json(data);
            }else{
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving Sources."
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Sources."
            });
        }
    },
    getSource: async (req, res) => {
        try{
            const id = req.params.id;
            let data = await Source.findByPk(id);
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "Source not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Source."
            });
        }
    },
    createSource: async (req, res) => {
        try{
            let source = req.body;
            source.id = uuidv4();
            let data = await Source.create(source)
            if(data){
                res.json(data);
            }else{
                throw `Some error occurred while creating Source.`;
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating Source."
            });
        }
    },
    updateSource: async (req, res) => {
        try{
            const id = req.params.id;
            let data = await Source.update(req.body, {
                where: {id: id}
            })
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "Source not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating Source."
            });
        }
    },
    deleteSource: async (req, res) => {
        try {
            const id = req.params.id;
            let data = await Source.destroy({where: { id: id }});
            if(data === 1){
                res.status(202).send({
                    message: "Source deleted !"
                });
            }else{
                res.status(404).send({
                    message: `Source not found !`
                });
            }  
        } catch (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while deleting Source."
            });
        }
    }
}