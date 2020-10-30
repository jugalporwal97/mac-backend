const assert = require('assert');
const app = require('../../src/app');

describe('\'product-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-data');

    assert.ok(service, 'Registered the service');
  });
});
