// Initializes the `marketing-persons` service on path `/marketing-persons`
const { MarketingPersons } = require('./marketing-persons.class');
const createModel = require('../../models/marketing-persons.model');
const hooks = require('./marketing-persons.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/marketing-persons', new MarketingPersons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('marketing-persons');

  service.hooks(hooks);
};
