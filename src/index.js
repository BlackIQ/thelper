import express from "express";
import cors from "cors";

import Routes from "$src/routes/index.js";
import { log, key } from "$src/middlewares/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set("json spaces", 2);

app.use("/api", log, key, Routes);
app.use("*", (req, res) =>
  res.status(404).send({
    url: req.originalUrl,
    method: req.method,
    message: "404 - Page not found",
  })
);

export default app;
