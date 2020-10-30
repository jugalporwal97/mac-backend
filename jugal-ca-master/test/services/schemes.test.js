const assert = require('assert');
const app = require('../../src/app');

describe("'schemes' service", () => {
  it('registered the service', () => {
    const service = app.service('schemes');

    assert.ok(service, 'Registered the service');
  });
});
