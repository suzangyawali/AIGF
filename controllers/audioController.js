import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { fileURLToPath } from "url"; // Import fileURLToPath from 'url'
import { dirname } from "path";   

// Load environment variables
dotenv.config();

// Define __filename and __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// ElevenLabs API configuration
const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_KEY;

const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // Replace with your desired voice ID
const AUDIO_DIR = path.join(__dirname, "../audio"); // Directory to store audio files

// Ensure the audio directory exists
if (!fs.existsSync(AUDIO_DIR)) {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
}

// Generate audio from text and return the audio URL
export const generateAudio = async (req,res) => {
  console.log("API Key:", ELEVEN_LABS_API_KEY ? "Available" : "Missing");
  try {
    const { text } = req.body;
    const audioFileName = `${uuidv4()}.mp3`;
    const audioFilePath = path.join(AUDIO_DIR, audioFileName);
    console.log(audioFilePath);

    const data = {
      text: text,
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
      },
    };

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVEN_LABS_API_KEY,
        },
        responseType: "stream", // Stream the audio response
      }
    );
    // Check if the response is successful (status 200)
   if (response.status !== 200) {
   throw new Error(`API request failed with status ${response.status}`);
   }
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);

    // Save the audio file locally
    const writer = fs.createWriteStream(audioFilePath);
    response.data.pipe(writer);

    // Wait for the file to finish writing
    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    

    // Return the relative path to the audio file
    return `/audio/${audioFileName}`;
  } catch (error) {
    console.error("Error generating audio:", error.message || error);
    
    res.status(500).json({ error: "Failed to generate audio" });
  }
};
