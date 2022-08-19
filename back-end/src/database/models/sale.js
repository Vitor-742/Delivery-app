module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "user_id",
      },
      sellerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "seller_id",
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        field: "total_price",
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
        field: "delivery_address",
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
        field: "delivery_number",
      },
      saleDate: {
        type: DataTypes.STRING,
        field: "sale_date",
      },
      status: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      tableName: "sales",
    }
  );

  Sales.associate = ({ Users }) => {
    Sales.belongsToMany(Users, {
      as: "users",
      through: Sales,
      foreignKey: "userId",
      otherKey: "sellerId",
    });
    Sales.belongsToMany(Users, {
      as: "sellers",
      through: Sales,
      foreignKey: "sellerId",
      otherKey: "userId",
    });
  };

  return Sales;
};
