# ECV NODE API

Live : <https://ecv-node-api-project.herokuapp.com/>

## Groupe

1. Baptiste COLLIGNON : baptiste.collignon@mail-ecv.fr
2. Vincent MANACHEM : vincent.manachem@mail-ecv.fr
3. Gautier MAIRE : gautier.maire@mail-ecv.fr
4. Stan DELAMOURD : stan.delamourd@mail-ecv.fr

## Setup

### DEV

```bash
#bash
git clone git@github.com:BCollignonEcv/ECV-node-api-project.git
cd ECV-node-api-project
npm run setup.dev
```

### PROD

```bash
#bash
git clone git@github.com:BCollignonEcv/ECV-node-api-project.git
cd ECV-node-api-project
npm run setup.prod
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080/docs/` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

## TODO

### Global

* [x] Setup
* [x] Postman
* [x] Swagger
* [x] Deploy

#### Middlewares

* [x] Authentification
* [x] Authorization

#### Services

* [x] Scraper

### User

* [x] Models
* [x] Migrations
* [x] Seeders
* [x] Routes
* [x] Controllers
* [x] Validator

### Source

* [x] Models
* [x] Migrations
* [x] Seeders
* [x] Routes
* [x] Controllers
* [x] Validator

## PROD Dependencies

* [Express](https://www.npmjs.com/package/express)

* [Axios](https://www.npmjs.com/package/axios)

* [Sequelize](https://www.npmjs.com/package/sequelize)

* [Bcrypt](https://www.npmjs.com/package/bcrypt)

* [Body-parser](https://www.npmjs.com/package/body-parser)

* [Cors](https://www.npmjs.com/package/cors)

* [Dotenv](https://www.npmjs.com/package/dotenv)

* [Uuid](https://www.npmjs.com/package/uuid)

* [cheerio](https://www.npmjs.com/package/cheerio)

* [path](https://www.npmjs.com/package/path)

* [pg](https://www.npmjs.com/package/pg)

* [pg-hstore](https://www.npmjs.com/package/pg-hstore)

* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

## DEV Dependencies

* [sqlite3](https://www.npmjs.com/package/sqlite3)
