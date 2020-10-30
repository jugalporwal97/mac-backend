const { authenticate } = require('@feathersjs/authentication').hooks;
const {
  restrictToAdmin,
  restrictToOwnerExceptAdmins
} = require('./../../utils/hooks');

const {
  hashPassword,
  protect
} = require('@feathersjs/authentication-local').hooks;

const addRelation = (context) => {
  const accessManagerModel = context.app.services['access-manager'].Model;

  context.params.sequelize = {
    raw: false,
    include: [
      {
        attributes: ['id', 'productId', 'read', 'write', 'update', 'remove'],
        model: accessManagerModel,
        as: 'permissions'
      }
    ]
  };

  return context;
};

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [restrictToAdmin, addRelation],
    get: [addRelation],
    create: [hashPassword('password'), restrictToAdmin],
    update: [hashPassword('password'), restrictToOwnerExceptAdmins],
    patch: [hashPassword('password'), restrictToOwnerExceptAdmins],
    remove: [restrictToAdmin]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
