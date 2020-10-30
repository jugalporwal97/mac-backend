// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const accessManager = sequelizeClient.define(
    'access_manager',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      read: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      write: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      update: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      remove: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      }
    },
    {
      indexes: [{ unique: true, fields: ['userId', 'productId'] }],
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  accessManager.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return accessManager;
};
