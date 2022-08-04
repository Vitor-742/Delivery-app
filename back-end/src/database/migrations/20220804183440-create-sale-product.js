"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SalesProducts", {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Sales",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("SalesProducts");
  },
};
