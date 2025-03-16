import express from "express";
import { chatWithAI } from "../controllers/chatController.js";

const router = express.Router();

// POST Route for AI Chat
router.post("/", chatWithAI);

export default router;