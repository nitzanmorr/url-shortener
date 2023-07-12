import { sq } from "../configs/db.js";
import { DataTypes } from "sequelize";

const urls = sq.define("urls", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: DataTypes.STRING },
});

urls.sync().then(() => {
  console.log("urls Model synced");
});

export default urls;
