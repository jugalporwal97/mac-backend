// Initializes the `process-done-by` service on path `/process-done-by`
const { ProcessDoneBy } = require('./process-done-by.class');
const createModel = require('../../models/process-done-by.model');
const hooks = require('./process-done-by.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/process-done-by', new ProcessDoneBy(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('process-done-by');

  service.hooks(hooks);
};
