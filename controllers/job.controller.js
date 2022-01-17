const models = require("../models");
const scraperUtils = require('../utils/scraper.utils');

const Source = models.Source;

module.exports = {
    getJobs: async (req, res) => {
        try {
            const data = {};
            req.body.search = req.body.search.replace(/\s/g, '%20')
            let sources = await Source.findAll({
                raw: true,
            });
            if(sources){
                for(const source of sources){
                    data[source.name] = await scraperUtils.scrapeData(req, source);
                }
                if(data){
                    res.send(data);
                }
            }
        } catch (err) {
            console.log(err)
        }
        
    },
}