const Ajv = require('ajv');
const {validateSchema} = require('feathers-hooks-common');
const schema = require('./spirits.schema');
const parseIntegers = require('../../hooks/parseIntegers');
const validateUnique = require('../../hooks/validateUnique');
const {authenticate} = require('feathers-authentication').hooks;

const ajv = new Ajv();

const validate = [
  parseIntegers('abv'),
  validateUnique('name'),
  validateSchema(schema, ajv),
];

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [...validate],
    update: [...validate],
    patch: [...validate],
    remove: [],
  },
};
