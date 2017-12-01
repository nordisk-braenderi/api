const assert = require('assert');
const app = require('../../src/app');

describe('\'spirits\' service', () => {
  it('registered the service', () => {
    const service = app.service('spirits');

    assert.ok(service, 'Registered the service');
  });
});
