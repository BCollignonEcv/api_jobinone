const models = require("../models");
const SourceType = models.Source;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getSourceTypes: async (req, res) => {
        try{
            let data = await SourceType.findAll();
            if(data){
                res.status(302).json(data);
            }else{
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving SourceTypes."
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving SourceTypes."
            });
        }
    },
    getSourceType: async (req, res) => {
        try{
            const id = req.params.id;
            let data = await SourceType.findByPk(id);
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "SourceType not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving SourceType."
            });
        }
    },
    createSourceType: async (req, res) => {
        try{
            let sourceType = req.body;
            sourceType.id = uuidv4();
            let data = await SourceType.create(sourceType)
            if(data){
                res.json(data);
            }else{
                throw `Some error occurred while creating SourceType.`;
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating SourceType."
            });
        }
    },
    updateSourceType: async (req, res) => {
        try{
            const id = req.params.id;
            let data = await SourceType.update(req.body, {
                where: {id: id}
            })
            if(data){
                res.status(302).json(data);
            }else{
                res.status(404).send({
                    message: "SourceType not found !"
                });
            }
        }catch(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while updating SourceType."
            });
        }
    },
    deleteSourceType: async (req, res) => {
        try {
            const id = req.params.id;
            let data = await SourceType.destroy({where: { id: id }});
            if(data === 1){
                res.status(202).send({
                    message: "SourceType deleted !"
                });
            }else{
                res.status(404).send({
                    message: `SourceType not found !`
                });
            }  
        } catch (err) {
            res.status(500).send({
                message:
                err.message || "Some error occurred while deleting SourceType."
            });
        }
    }
}