const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToAdmin } = require('./../../utils/hooks');

module.exports = {
  before: {
    all: [authenticate('jwt'), restrictToAdmin],
    find: [],
    get: [],
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
