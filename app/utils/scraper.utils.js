'use strict';
const cheerio = require("cheerio");
const axios = require('axios');

module.exports = class Scraper {
  source;
  req;
  url = {
    value: '',
    get: () => {
      return this.value;
    },
    set: (req, source) => {
      this.value = `${source.baseUrl}?${source.search}=${req.body.search}&${source.location}=${req.body.location}`;
    },
  }
  scrapedData;
  elements = [];

  constructor(req, source){
    this.source = source;
    this.req = req;
    this.url.set(this.req, this.source);
  }

  get(){
    return {
      url: this.url.get(),
      source: this.source,
      elements: this.elements
    }
  }

  async scrapeData() {
    await axios.get(this.url.get())
    .then((res) => {
      console.log(this.url.get());
      console.log(res);
      this.scrapedData = res.data;
    }).catch((err) => {
      console.error(err)
    });
  }

  sortData() {
    const $ = cheerio.load(this.scrapedData);
    $(".mosaic-provider-jobcards > a").each((index, element) => {
      let job = new Job();
      job.title = $(element).find(this.source.titleTag).text();
      job.company = $(element).find(this.source.companyTag).text();
      job.salary = $(element).find(this.source.salaryTag).text();
      this.jobs[index] = job;
    });
  }
}