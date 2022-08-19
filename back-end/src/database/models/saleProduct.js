module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "SalesProducts",
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "sale_id",
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "product_id",
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "sales_products",
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
