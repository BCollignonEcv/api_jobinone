'use strict';

module.exports =  class Job {
  title;
  company;
  salary;

  constructor(newJob = {}){
    this.title = newJob.title || null;
    this.company = newJob.company || null;
    this.salary = newJob.salary || null;
  }
}