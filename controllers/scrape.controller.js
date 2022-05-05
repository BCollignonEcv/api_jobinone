const models = require("../models");
const Source = models.Source;

const Scraper = require('../services/scraper.service');


module.exports = {
    scrape: async (req, res) => {
        try {
            const data = {};
            if(req.method === 'GET'){
                req.body.location = req.query.location;
                req.body.search = req.query.search;
            }
            req.body.search = req.body.search.replace(/\s/g, '%20')
            let sources = await Source.findAll({ raw: true, where: { enable: true } });
            if(sources){
                for (const source of sources){
                    let scraper = new Scraper(req, source);
                    try {
                        await scraper.scrape();
                    } catch (error) {
                        throw Error('Something went wrong during scraping')
                    }
                    if(scraper.jobs.status != 'OK'){
                        res.send(scraper.jobs.data); 
                        return;
                    }
                    data[source.name] = { jobs: scraper.jobs.data }
                }
                if(data){
                    res.json(data);
                }
            }
        } catch (err) {
            let statusCode = err.errorStatus || 500;
            let errorMessage = err.message || "internal error";
            res.status(statusCode).json(errorMessage);
        }
    },
}