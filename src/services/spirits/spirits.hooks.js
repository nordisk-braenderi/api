const Ajv = require('ajv');
const {validateSchema} = require('feathers-hooks-common');
const schema = require('./spirits.schema');

const ajv = new Ajv();

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateSchema(schema, ajv)],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
