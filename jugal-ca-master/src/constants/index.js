const USER_TYPE_ID = 3;
const ADMIN_TYPE_ID = 2;
const SUPER_USER_ID = 1;

const ERRORS = {
  userPermissionMissing: [
    'Permissions does not exist for this user.',
    { code: 1 }
  ],
  missingUserData: ['missing user data', { code: 2 }],
  noWritePermission: ['Write not allowed', { code: 3 }],
  noReadPermission: ['Read not allowed', { code: 4 }],
  noUpdatePermission: ['Update not allowed', { code: 5 }],
  noDeletePermission: ['Delete not allowed', { code: 6 }],
  allowedForOwner: ['Allowed for owners and admins only', { code: 7 }]
};

module.exports = {
  ADMIN_TYPE_ID,
  SUPER_USER_ID,
  USER_TYPE_ID,
  ERRORS
};
