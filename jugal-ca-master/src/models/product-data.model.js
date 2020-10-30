// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productData = sequelizeClient.define(
    'product_data',
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      inwardDate: {
        type: DataTypes.DATE
      },
      pan: {
        type: DataTypes.STRING
      },
      unitTypeId: {
        type: DataTypes.INTEGER
      },
      address: {
        type: DataTypes.TEXT
      },
      benefits: {
        type: DataTypes.STRING
      },
      onlineReferenceNumber: {
        type: DataTypes.STRING
      },
      allocatedToInspectorId: {
        type: DataTypes.INTEGER
      },
      contactPersonId: {
        type: DataTypes.INTEGER
      },
      customerLoginId: {
        type: DataTypes.STRING
      },
      customerLoginPassword: {
        type: DataTypes.STRING
      },
      bankId: {
        type: DataTypes.INTEGER
      },
      branchId: {
        type: DataTypes.INTEGER
      },
      cityId: {
        type: DataTypes.INTEGER
      },
      loanAmount: {
        type: DataTypes.STRING
      },
      subsidy: {
        type: DataTypes.STRING
      },
      sanctionDate: {
        type: DataTypes.DATE
      },
      lastDateOfApplication: {
        type: DataTypes.DATE
      },
      lastDateForJit: {
        type: DataTypes.DATE
      },
      lastDateForJitExtension: {
        type: DataTypes.DATE
      },
      jitVisitDate: {
        type: DataTypes.DATE
      },
      marketingPersonId: {
        type: DataTypes.INTEGER
      },
      statusId: {
        type: DataTypes.INTEGER
      },
      stateDate: {
        type: DataTypes.DATE
      },
      uid: {
        type: DataTypes.STRING
      },
      remark: {
        type: DataTypes.TEXT
      },
      inwardSlip: {
        type: DataTypes.BOOLEAN
      },
      referenceDate: {
        type: DataTypes.DATE
      },
      categoryId: {
        type: DataTypes.INTEGER
      },
      schemeId: {
        type: DataTypes.INTEGER
      },
      interest: {
        type: DataTypes.STRING
      },
      capital: {
        type: DataTypes.STRING
      },
      claimUpTo: {
        type: DataTypes.STRING
      },
      processDoneById: {
        type: DataTypes.INTEGER
      },
      fileNumber: {
        type: DataTypes.STRING
      },
      acknowledgementNumber: {
        type: DataTypes.STRING
      },
      lastClaimQuarter: {
        type: DataTypes.STRING
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
  productData.associate = function (models) {
    productData.belongsTo(models.products, {
      foreignKey: 'productId',
      targetKey: 'id',
      as: 'product'
    });

    productData.belongsTo(models.unit_types, {
      foreignKey: 'unitTypeId',
      targetKey: 'id',
      as: 'unitType'
    });

    productData.belongsTo(models.inspectors, {
      foreignKey: 'allocatedToInspectorId',
      targetKey: 'id',
      as: 'allocatedInspector'
    });

    productData.belongsTo(models.contact_persons, {
      foreignKey: 'contactPersonId',
      targetKey: 'id',
      as: 'contactPerson'
    });

    productData.belongsTo(models.banks, {
      foreignKey: 'bankId',
      targetKey: 'id',
      as: 'bank'
    });

    productData.belongsTo(models.cities, {
      foreignKey: 'cityId',
      targetKey: 'id',
      as: 'city'
    });

    productData.belongsTo(models.branches, {
      foreignKey: 'branchId',
      targetKey: 'id',
      as: 'branch'
    });

    productData.belongsTo(models.marketing_persons, {
      foreignKey: 'marketingPersonId',
      targetKey: 'id',
      as: 'marketingPerson'
    });

    productData.belongsTo(models.statuses, {
      foreignKey: 'statusId',
      targetKey: 'id',
      as: 'status'
    });

    productData.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      targetKey: 'id',
      as: 'category'
    });

    productData.belongsTo(models.schemes, {
      foreignKey: 'schemeId',
      targetKey: 'id',
      as: 'scheme'
    });

    productData.belongsTo(models.process_done_by, {
      foreignKey: 'processDoneById',
      targetKey: 'id',
      as: 'processDoneBy'
    });
  };

  return productData;
};
