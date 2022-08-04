module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Products",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING(200),
    },
    {
      timestamps: false,
    }
  );

  Products.associate = ({ Sales }) => {
    Products.hasMany(Sales, {
      foreignKey: "productId",
      as: "saleProduct",
    });
  };

  return Products;
};
