// const models = require("../models");
// const Scraper = require('../class/scraper.class');
// const sourceController = require('../controllers/source.controller');

// const Source = models.Source;

// module.exports = {
//     getJobs: async (req, res) => {
//         try {
//             const data = {};
//             if(req.method === 'GET'){
//                 req.body.location = req.query.location;
//                 req.body.search = req.query.search;
//             }
//             req.body.search = req.body.search.replace(/\s/g, '%20')
//             let sources = await Source.findAll({ raw: true, where: { enable: true } });
//             // let sources = await sourceController.getSources(req);
//             if(sources){
//                 for (const source of sources){
//                     let scraper = new Scraper(req, source);
//                     await scraper.scrapeData();
//                     scraper.sortData();
//                     data.jobs = scraper.get();
//                 }
//                 if(data.jobs){
//                     res.json(data);
//                 }
//             }
//         } catch (err) {
//             console.log(err)
//         }
//     },
// }