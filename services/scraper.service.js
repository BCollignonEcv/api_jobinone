'use strict';
const cheerio = require("cheerio");
const axios = require('axios');


module.exports = class Scraper {
    constructor(req, source) {
        this.retry = false;
        this.source = source;
        this.jobs = {};
        this.scrapedData = {};
        this.url = generateUrl(source, req);
        this.dataMapping = generateDataMapping(source);
    }

    async scrape() {
        this.scrapedData = await executeScraper(this.url);

        if (this.scrapedData) {
            this.jobs = generateJobsObject(this.dataMapping, this.scrapedData);
            if(this.jobs.status != 'OK'){
                if(!this.retry){
                    this.retry = true;
                    return this.scrape();
                }
                return { error: 'failed to scrape data' }
            }
            return this.jobs;
        }
    };
}


const executeScraper = async (url) => {
    return axios.get(url).then((response) => {
        return response.data;
    }).catch((err) => {
        return err;
    });
}

function generateJobsObject(dataMapping, scrapedData){
    const $ = cheerio.load(scrapedData);
    let jobs = [];
    $(dataMapping.container.tag).each((index, element) => {
        let job = {};
        Object.keys(dataMapping).forEach((key) => {
            // return if attribute should not be exported
            if('export' in dataMapping[key] && !dataMapping[key].export){
                return;
            }
            if('type' in dataMapping[key]){
                switch (dataMapping[key].type){
                    case 'url':
                        job[key] = $(element).find(dataMapping[key].tag).html();
                        break;
                    default :
                        job[key] = $(element).find(dataMapping[key].tag).text();
                        break;
                }
            }else{
                job[key] = $(element).find(dataMapping[key].tag).text();
            }
        })
        jobs.push(job);
    });
    if(jobs.length > 0){
        return {
            status : 'OK',
            data : jobs
        };
    }else{
        return {
            status : 'ERROR',
            data : $.html()
        }
    }
}

function generateUrl(source, req){
    let a = `http://api.scraperapi.com?api_key=5f238e1d49f1722de4d6d749aeba038d&url=${source.baseUrl}?${source.search}=${req.body.search}&${source.location}=${req.body.location}`;
    return a;
}

function generateDataMapping(source){
    let dataMapping = {} 
    Object.keys(source).filter((key) => {
        if(key.includes('Tag')){
            if(key === 'urlTag'){
                return dataMapping[key.replace('Tag', '')] = { tag: source[key], type: 'url'};
            }
            return dataMapping[key.replace('Tag', '')] = { tag: source[key]};
        }
    })
    dataMapping.container = { tag: source.jobContainer, export: false };
    return dataMapping;
}