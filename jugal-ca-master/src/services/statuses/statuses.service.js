// Initializes the `statuses` service on path `/statuses`
const { Statuses } = require('./statuses.class');
const createModel = require('../../models/statuses.model');
const hooks = require('./statuses.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/statuses', new Statuses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('statuses');

  service.hooks(hooks);
};
