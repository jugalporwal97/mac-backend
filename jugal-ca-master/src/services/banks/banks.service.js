// Initializes the `banks` service on path `/banks`
const { Banks } = require('./banks.class');
const createModel = require('../../models/banks.model');
const hooks = require('./banks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/banks', new Banks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('banks');

  service.hooks(hooks);
};
