import sequelize, { Model } from "sequelize";
import db from "./sequelize";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

class User extends Model {
  declare username: string;
  declare password: string;
  declare role: Roles;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: sequelize.ENUM(Roles.ADMIN, Roles.USER),
      allowNull: false,
      defaultValue: Roles.USER,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize: db,
    modelName: "user",
    tableName: "user",
    underscored: true,
  }
);

export default User;
