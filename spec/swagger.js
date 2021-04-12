const swaggerJsdoc = require('swagger-jsdoc');
const pjson = require('../package.json');

const options = {
  // List of files to be processed
  apis: [
    './spec/swagger/components/responses.yaml',
    './spec/swagger/components/properties.yaml',
    './controllers/user/*',
    './controllers/point/*',
    './controllers/eventPoint.js',
    './controllers/information.js',
  ],
  definition: {
    openapi: '3.0.0',
    // App info
    info: {
      title: pjson.name,
      version: pjson.version,
      description: pjson.description,
      contact: {
        name: pjson.author,
      },
    },
    // Documentation endpoints groups
    tags: [{
      name: 'User',
      description: 'User endpoint',
    }, {
      name: 'Point',
      description: 'Point endpoint',
    }, {
      name: 'Event',
      description: 'Event endpoint',
    }, {
      name: 'Information',
      description: 'Information about app/system',
    }],
    // List of servers environments
    // DOC: https://swagger.io/specification/#server-object
    // servers: [{
    //   url: 'https://harcmap.pl',
    //   description: 'Production server',
    // }, {
    //   url: 'https://harcmap.henouser.pl',
    //   description: 'Staging server (temporary domain)',
    // }, {
    //   url: 'https://localhost:3030',
    //   description: 'Development server (local)',
    // }],
  },
};

const specs = swaggerJsdoc(options);
module.exports = specs;
