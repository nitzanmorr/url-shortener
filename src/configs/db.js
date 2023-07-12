import { Sequelize } from "sequelize";
// require("dotenv").config({ path: "../../.env" });

const sequelize = new Sequelize("url_shortener", "nitzan", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

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
