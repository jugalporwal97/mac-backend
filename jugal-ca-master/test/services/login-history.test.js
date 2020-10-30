const assert = require('assert');
const app = require('../../src/app');

describe("'login-history' service", () => {
  it('registered the service', () => {
    const service = app.service('login-history');

    assert.ok(service, 'Registered the service');
  });
});
