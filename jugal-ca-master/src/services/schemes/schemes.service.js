// Initializes the `schemes` service on path `/schemes`
const { Schemes } = require('./schemes.class');
const createModel = require('../../models/schemes.model');
const hooks = require('./schemes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/schemes', new Schemes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('schemes');

  service.hooks(hooks);
};
