import { Sequelize } from "sequelize";
// require("dotenv").config({ path: "../../.env" });
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// module.exports = { sq: sequelize, testDbConnection };
export { sequelize as sq, testDbConnection };
