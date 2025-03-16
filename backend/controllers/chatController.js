import dotenv from 'dotenv'; // Make sure dotenv is imported
import Replicate from "replicate";
import Conversation from "../models/user.js";
dotenv.config(); // Load environment variables

console.log("API Token:", process.env.REPLICATE_API_TOKEN);

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // Load API Key
});

// Handle AI Chat Requests
export const chatWithAI = async (req, res) => {
  try {
    // Extract user input from request body
    const { prompt } = req.body;

    // Generate AI response using Replicate
    const output = await replicate.run(
      "replicate/llama-2-70b-chat:2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
      {
        input: {
          prompt: `Me: ${prompt}\nDarling:`,
          system_prompt: `You are Darling, my girlfriend. You love me and are happy in our relationship. Respond with at most 3 sentences, starting with 'Darling' and ending with a period.`,
        },
      }
    );

    console.log("AI Response:", output);
    

    
    // Correcting the way the data is passed to the Conversation model
    const conversationInstance = new Conversation({
      prompt: prompt,  // Pass the user prompt
      response: output?.join("")?.trim(),  // Join the array and trim the result
    });

    await conversationInstance.save();
    // Return the AI response
    res.status(200).json({ reply: conversationInstance.response });

  } catch (error) {
    console.error("AI Chat Error:", error);
    res.status(500).json({ error: "AI conversation failed" });
  }
};
