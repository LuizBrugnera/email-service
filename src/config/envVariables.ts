import dotenv from "dotenv";
dotenv.config();

export const DataBaseUrl = process.env.DATABASE_URL!;

export const MySqlName = process.env.DB_NAME!;
export const MySqlUser = process.env.DB_USER!;
export const MySqlPassword = process.env.DB_PASS!;
export const MySqlHost = process.env.DB_HOST!;
