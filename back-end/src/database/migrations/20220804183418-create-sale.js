"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      sale_date: {
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
    await queryInterface.dropTable("sales");
  },
};
