"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("Sales");
  },
};
