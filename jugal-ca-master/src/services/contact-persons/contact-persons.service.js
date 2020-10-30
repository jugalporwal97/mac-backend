// Initializes the `contact-persons` service on path `/contact-persons`
const { ContactPersons } = require('./contact-persons.class');
const createModel = require('../../models/contact-persons.model');
const hooks = require('./contact-persons.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/contact-persons', new ContactPersons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contact-persons');

  service.hooks(hooks);
};
