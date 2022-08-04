module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  User.associate = ({ Sales }) => {
    User.hasMany(Sales, {
      foreignKey: "userId",
      as: "user",
    });
    User.hasMany(Sales, {
      foreignKey: "sellerId",
      as: "seller",
    });
  };

  return User;
};
