import express from "express";

import Message from "$src/routes/message/message.routes.js";

const router = express.Router();

router.use("/message", Message);

export default router;
