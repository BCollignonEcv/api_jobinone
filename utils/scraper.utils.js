const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require('axios');

const scrapeData = async (req, source) => {
    try {
        let data = {};
        data.url = `${source.baseurl}?${source.search}=${req.body.search}&${source.location}=${req.body.location}`;
        const response = await axios.request(data.url);
        if(response){
            data.response = new JSDOM(response.body);
            return data;
        }
    } catch (error) {
        
    }
};

module.exports = {
    scrapeData
}