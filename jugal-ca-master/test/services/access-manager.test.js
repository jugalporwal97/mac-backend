const assert = require('assert');
const app = require('../../src/app');

describe("'access-manager' service", () => {
  it('registered the service', () => {
    const service = app.service('access-manager');

    assert.ok(service, 'Registered the service');
  });
});
