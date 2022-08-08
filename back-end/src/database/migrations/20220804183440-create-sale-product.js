"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("salesProducts", {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "sales",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "products",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("salesProducts");
  },
};
