// Initializes the `product-data` service on path `/product-data`
const { ProductData } = require('./product-data.class');
const createModel = require('../../models/product-data.model');
const hooks = require('./product-data.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product-data', new ProductData(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product-data');

  service.hooks(hooks);
};
