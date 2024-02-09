import express from "express";

import { Message } from "$src/controllers/index.js";

const router = express.Router();

router.post("/send/:bot", Message.SEND);

export default router;
