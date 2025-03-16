import express from "express";
import { generateAudio } from "../controllers/audioController.js";

const router = express.Router();

// POST Route for AI Chat
router.post("/", generateAudio);

export default router;