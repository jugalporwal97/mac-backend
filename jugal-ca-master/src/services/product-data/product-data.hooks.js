const { checkPermissions } = require('../../utils/hooks');

const { authenticate } = require('@feathersjs/authentication').hooks;

const addRelation = (context) => {
  const productsModel = context.app.services['products'].Model;
  const unitTypesModel = context.app.services['unit-types'].Model;
  const inspectorsModel = context.app.services['inspectors'].Model;
  const contactPersonsModel = context.app.services['contact-persons'].Model;

  const banksModel = context.app.services['banks'].Model;
  const citiesModel = context.app.services['cities'].Model;
  const branchesModel = context.app.services['branches'].Model;

  const marketingPersonModel = context.app.services['marketing-persons'].Model;
  const statusesModel = context.app.services['statuses'].Model;
  const categoriesModel = context.app.services['categories'].Model;
  const schemesModel = context.app.services['schemes'].Model;
  const processDoneByModel = context.app.services['process-done-by'].Model;

  context.params.sequelize = {
    raw: false,
    include: [
      {
        attributes: ['name'],
        model: productsModel,
        as: 'product'
      },
      {
        attributes: ['name'],
        model: unitTypesModel,
        as: 'unitType'
      },
      {
        attributes: ['name'],
        model: inspectorsModel,
        as: 'allocatedInspector'
      },
      {
        attributes: ['name', 'contact'],
        model: contactPersonsModel,
        as: 'contactPerson'
      },
      {
        attributes: ['name'],
        model: banksModel,
        as: 'bank'
      },
      {
        attributes: ['name'],
        model: citiesModel,
        as: 'city'
      },
      {
        attributes: ['name'],
        model: branchesModel,
        as: 'branch'
      },
      {
        attributes: ['name'],
        model: marketingPersonModel,
        as: 'marketingPerson'
      },
      {
        attributes: ['name'],
        model: statusesModel,
        as: 'status'
      },
      {
        attributes: ['name'],
        model: categoriesModel,
        as: 'category'
      },
      {
        attributes: ['name'],
        model: schemesModel,
        as: 'scheme'
      },
      {
        attributes: ['name'],
        model: processDoneByModel,
        as: 'processDoneBy'
      }
    ]
  };

  return context;
};

module.exports = {
  before: {
    all: [authenticate('jwt'), checkPermissions],
    find: [addRelation],
    get: [addRelation],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
