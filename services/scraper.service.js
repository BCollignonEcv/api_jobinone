'use strict';
const cheerio = require("cheerio");
const axios = require('axios');
const ObjectUtils = require('../utils/object.utils');


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
            this.jobs = generateJobsObject(this.dataMapping, this.scrapedData, this.source);
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

function generateJobsObject(dataMapping, scrapedData, source){
    const $ = cheerio.load(scrapedData);
    let jobs = [];
    $(dataMapping.container.tag).each((index, element) => {
        let job = { source: source.name};

        Object.keys(dataMapping).forEach((key) => {
            // return if attribute should not be exported
            if('export' in dataMapping[key] && !dataMapping[key].export){
                return;
            }
            if('type' in dataMapping[key]){
                switch (dataMapping[key].type){
                    case 'url':
                        let targetUrl = $(element).find(dataMapping[key].tag).attr('href');
                        if(!targetUrl.startsWith('http')){
                            targetUrl = source.baseUrl + targetUrl;
                        }
                        job[key] = targetUrl;
                        break;
                    default :
                        job[key] = $(element).find(dataMapping[key].tag).text();
                        break;
                }
            }else{
                job[key] = $(element).find(dataMapping[key].tag).text();
            }
        })
        if(isValidJob(job)){
            jobs.push(job);
        }
    });
    if(jobs.length > 0){
        return {
            status : 'OK',
            data : jobs,
            errors : {}
        };
    }else{
        return {
            status : 'ERROR',
            data : jobs,
            error : { message: 'No Job found, Source may to not be up to date '}
        }
    }
}

function generateUrl(source, req){
    return `http://api.scraperapi.com?api_key=5f238e1d49f1722de4d6d749aeba038d&url=${source.baseUrl}${source.pathUrl}?${source.searchParam}=${req.body.search}&${source.locationParam}=${req.body.location}`;
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
    dataMapping.container = { tag: source.container, export: false };
    return dataMapping;
}

// Check is job as more than 50% full attribute
function isValidJob(job){
    // let counter = 0;
    // let emptyCounter = 0;
    // Object.keys(job).filter((key) => {
    //     counter++;
    //     if(!ObjectUtils.isNotEmpty(job[key])){
    //         emptyCounter++;
    //     }
    // })
    // return (emptyCounter / counter) < 0.5;
    return true;
}