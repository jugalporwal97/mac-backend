// Initializes the `inspectors` service on path `/inspectors`
const { Inspectors } = require('./inspectors.class');
const createModel = require('../../models/inspectors.model');
const hooks = require('./inspectors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/inspectors', new Inspectors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('inspectors');

  service.hooks(hooks);
};
