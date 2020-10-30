const assert = require('assert');
const app = require('../../src/app');

describe("'contact-persons' service", () => {
  it('registered the service', () => {
    const service = app.service('contact-persons');

    assert.ok(service, 'Registered the service');
  });
});
