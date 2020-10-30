// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const loginHistory = sequelizeClient.define(
    'login_history',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      ipAddress: {
        type: DataTypes.STRING
      },
      deviceName: {
        type: DataTypes.STRING
      },
      place: {
        type: DataTypes.TEXT
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  loginHistory.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return loginHistory;
};
