import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import connectDB from './database.js';
import logger from './middleware/logger.js';
import audioRoutes from "./routes/audioRoutes.js";
import chatRoutes from './routes/chatRoutes.js';
const app = express();

dotenv.config();
connectDB();


app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(logger);

app.use(
    cors({
      origin: process.env.APP_URL,
    })
);


app.get("/", (req, res) => {
    res.json({
        app:"Nodejs",
        version:"1.0",
    });
});
app.use("/api/chat",chatRoutes);
app.use("/api/audio",audioRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});