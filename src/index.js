import express from "express";
import { sq, testDbConnection } from "./configs/db.js";
import urls from "./models/models.js";
import shortRouter from "./routes/routes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

const app = express();
const port = 3000;

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
