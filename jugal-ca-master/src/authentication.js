const {
  AuthenticationService,
  JWTStrategy
} = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = (app) => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());

  app.hooks({
    after: {
      create: [createLoginHistory]
    }
  });
};

const createLoginHistory = (context) => {
  if (context.result && context.result.user) {
    const userId = context.result.user.id;
    context.app.service('login-history').create({
      userId,
      deviceName: context.data.deviceName || context.params.provider || '',
      place: context.data.place || '',
      ipAddress: context.data.ipAddress || ''
    });
  }
};
