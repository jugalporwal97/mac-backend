const assert = require('assert');
const app = require('../../src/app');

describe("'unit-types' service", () => {
  it('registered the service', () => {
    const service = app.service('unit-types');

    assert.ok(service, 'Registered the service');
  });
});
