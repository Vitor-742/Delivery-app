module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sellerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
      },
      deliveryAddress: {
        type: DataTypes.STRING(100),
      },
      deliveryNumber: {
        type: DataTypes.STRING(50),
      },
      saleDate: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
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
