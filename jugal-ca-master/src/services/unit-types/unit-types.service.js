// Initializes the `unit-types` service on path `/unit-types`
const { UnitTypes } = require('./unit-types.class');
const createModel = require('../../models/unit-types.model');
const hooks = require('./unit-types.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/unit-types', new UnitTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('unit-types');

  service.hooks(hooks);
};
