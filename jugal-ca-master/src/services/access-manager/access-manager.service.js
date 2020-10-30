// Initializes the `access-manager` service on path `/access-manager`
const { AccessManager } = require('./access-manager.class');
const createModel = require('../../models/access-manager.model');
const hooks = require('./access-manager.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/access-manager', new AccessManager(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('access-manager');

  service.hooks(hooks);
};
