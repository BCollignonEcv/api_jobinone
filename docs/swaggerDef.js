const { version } = require('../package.json');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'API documentation',
    version,
    license: {
      name: 'MIT'
    },
  },
  servers: [
    {
      url: `http://localhost:${PORT}/`,
    },
  ],
};

module.exports = swaggerDef;
