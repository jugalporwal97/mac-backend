'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER // relation => name
      },
      inwardDate: {
        type: Sequelize.DATE
      },
      pan: {
        type: Sequelize.STRING
      },
      unitTypeId: {
        type: Sequelize.INTEGER // relation => name
      },
      address: {
        type: Sequelize.TEXT
      },
      benefits: {
        type: Sequelize.STRING // 15% & 6%
      },
      onlineReferenceNumber: {
        type: Sequelize.STRING
      },
      allocatedToInspectorId: {
        type: Sequelize.INTEGER // relation =>  name
      },
      contactPersonId: {
        type: Sequelize.INTEGER // relation  => name and number
      },
      customerLoginId: {
        type: Sequelize.STRING
      },
      customerLoginPassword: {
        type: Sequelize.STRING
      },
      bankId: {
        type: Sequelize.INTEGER // relation  => name
      },
      branchId: {
        type: Sequelize.INTEGER // relation  => name
      },
      cityId: {
        type: Sequelize.INTEGER // relation  => city
      },
      loanAmount: {
        type: Sequelize.STRING
      },
      subsidy: {
        type: Sequelize.STRING
      },
      sanctionDate: {
        type: Sequelize.DATE
      },
      lastDateOfApplication: {
        type: Sequelize.DATE
      },
      lastDateForJit: {
        type: Sequelize.DATE
      },
      lastDateForJitExtension: {
        type: Sequelize.DATE
      },
      jitVisitDate: {
        type: Sequelize.DATE
      },
      marketingPersonId: {
        type: Sequelize.INTEGER // relation => name
      },
      statusId: {
        type: Sequelize.INTEGER // relation =>  name
      },
      stateDate: {
        type: Sequelize.DATE
      },
      uid: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.TEXT
      },
      inwardSlip: {
        type: Sequelize.BOOLEAN
      },
      referenceDate: {
        type: Sequelize.DATE
      },
      categoryId: {
        type: Sequelize.INTEGER // relation =>  name
      },
      schemeId: {
        type: Sequelize.INTEGER // relation => name
      },
      interest: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      claimUpTo: {
        type: Sequelize.STRING
      },
      processDoneById: {
        type: Sequelize.INTEGER // relation => name
      },
      fileNumber: {
        type: Sequelize.STRING
      },
      acknowledgementNumber: {
        type: Sequelize.STRING
      },
      lastClaimQuarter: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_data');
  }
};
