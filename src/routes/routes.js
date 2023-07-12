import app from "../index.js";
import { newUrl } from "../services/businessService.js";
import { getOriginal } from "../services/dbService.js";
import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

router.post("/", async (req, res) => {
  const originalUrl = req.body.url;
  const short = await newUrl(originalUrl);
  res.send(JSON.stringify(short));
  console.log(`url shortened at ${new Date().toJSON()}`);
});

router.get("/:url", async (req, res) => {
  const originalUrl = await getOriginal(req.params.url);
  if (originalUrl === null) {
    res.status(404);
    res.send("URL not found");
  } else {
    res.redirect(originalUrl);
    console.log(`url redirected at ${new Date().toJSON()}`);
  }
});

export default router;
