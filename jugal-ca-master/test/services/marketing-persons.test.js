const assert = require('assert');
const app = require('../../src/app');

describe('\'marketing-persons\' service', () => {
  it('registered the service', () => {
    const service = app.service('marketing-persons');

    assert.ok(service, 'Registered the service');
  });
});
