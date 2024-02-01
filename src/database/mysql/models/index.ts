import db from "./sequelize";

export const syncDB = () => db.sync();
