module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING(200),
    },
    {
      timestamps: false,
      tableName: "products",
    }
  );

  Products.associate = ({ SalesProducts }) => {
    Products.hasMany(SalesProducts, {
      foreignKey: "productId",
      as: "saleProduct",
    });
  };
  return Products;
};
