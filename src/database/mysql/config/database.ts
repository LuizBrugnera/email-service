import {
  MySqlHost,
  MySqlName,
  MySqlPassword,
  MySqlUser,
} from "../../../config/envVariables";
import { Options } from "sequelize";

const config: Options = {
  username: MySqlUser,
  password: MySqlPassword,
  host: MySqlHost,
  database: MySqlName,
  dialect: "mysql",
};

export = config;
