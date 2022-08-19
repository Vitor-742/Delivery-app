module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "SalesProducts",
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "salesProducts",
    }
  );

  SalesProducts.associate = ({ Products, Sales }) => {
    SalesProducts.belongsToMany(Products, {
      as: "products",
      through: SalesProducts,
      foreignKey: "productId",
      otherKey: "saleId",
    });
    SalesProducts.belongsToMany(Sales, {
      as: "sales",
      through: SalesProducts,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };

  return SalesProducts;
};
