// Initializes the `login-history` service on path `/login-history`
const { LoginHistory } = require('./login-history.class');
const createModel = require('../../models/login-history.model');
const hooks = require('./login-history.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/login-history', new LoginHistory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('login-history');

  service.hooks(hooks);
};
