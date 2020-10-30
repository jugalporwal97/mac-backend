const assert = require('assert');
const app = require('../../src/app');

describe("'process-done-by' service", () => {
  it('registered the service', () => {
    const service = app.service('process-done-by');

    assert.ok(service, 'Registered the service');
  });
});
