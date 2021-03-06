// Initializes the `spirits` service on path `/spirits`
const createService = require('feathers-rethinkdb');
const hooks = require('./spirits.hooks');
const filters = require('./spirits.filters');

module.exports = function () {
  const app = this;
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'spirits',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/spirits', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('spirits');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
