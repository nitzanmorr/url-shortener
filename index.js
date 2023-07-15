import express from "express";
import { sq, testDbConnection } from "./src/configs/db.js";
import urls from "./src/models/models.js";
import shortRouter from "./src/routes/routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger_output.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  testDbConnection();
  res.send("Hello World!");
});

app.use("/short", shortRouter);

const startApp = async () => {
  await urls.sync();
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  startApp();
});

export default app;
