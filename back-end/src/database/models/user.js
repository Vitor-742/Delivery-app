module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  Users.associate = ({ Sales }) => {
    Users.hasMany(Sales, {
      foreignKey: "userId",
      as: "user",
    });
    Users.hasMany(Sales, {
      foreignKey: "sellerId",
      as: "seller",
    });
  };

  return Users;
};
