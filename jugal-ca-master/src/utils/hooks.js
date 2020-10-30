const { ADMIN_TYPE_ID, SUPER_USER_ID, ERRORS } = require('./../constants');

const errors = require('@feathersjs/errors');

const restrictToAdmin = (context) => {
  if (context.params.provider) {
    if (
      context.params &&
      context.params.user &&
      [SUPER_USER_ID, ADMIN_TYPE_ID].includes(context.params.user.type)
    ) {
      return context;
    } else {
      throw new errors.Forbidden('Only for admin');
    }
  } else {
    return context;
  }
};

const restrictToOwnerExceptAdmins = (context) => {
  if (context.params.provider) {
    if (
      context.params &&
      context.params.user &&
      ([SUPER_USER_ID, ADMIN_TYPE_ID].includes(context.params.user.type) ||
        context.id == context.params.user.id)
    ) {
      return context;
    } else {
      throw new errors.Forbidden(...ERRORS['allowedForOwner']);
    }
  } else {
    return context;
  }
};

const checkPermissions = async (context) => {
  if (context.params && context.params.user && context.params.user.id) {
    const userId = context.params.user.id;
    const response = await context.app.service('access-manager').find({
      query: { userId }
    });

    if (response) {
      if (response.data.length) {
        const permissions = response.data[0];
        if (context.method === 'create') {
          // check create permission
          if (permissions.write) {
            return context;
          } else {
            throw new errors.Unprocessable(...ERRORS['noWritePermission']);
          }
        } else if (context.method === 'patch' || context.method === 'update') {
          // check update permission
          if (permissions.update) {
            return context;
          } else {
            throw new errors.Unprocessable(...ERRORS['noUpdatePermission']);
          }
        } else if (context.method === 'get' || context.method === 'find') {
          // check read permission
          if (permissions.read) {
            return context;
          } else {
            throw new errors.Unprocessable(...ERRORS['noReadPermission']);
          }
        } else if (context.method === 'remove') {
          // check delete permission
          if (permissions.remove) {
            return context;
          } else {
            throw new errors.Unprocessable(...ERRORS['noDeletePermission']);
          }
        } else {
          return context;
        }
      } else {
        throw new errors.Unprocessable(...ERRORS['userPermissionMissing']);
      }
    } else {
      throw new errors.Unprocessable(...ERRORS['userPermissionMissing']);
    }
  } else {
    throw new errors.GeneralError(...ERRORS['missingUserData']);
  }
};

module.exports = {
  restrictToAdmin,
  checkPermissions,
  restrictToOwnerExceptAdmins
};
