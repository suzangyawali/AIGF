import mongoose from "mongoose";

// Define the schema for the conversation log
const conversationSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: false },  // Optional: Store user ID if applicable
  sessionId: { type: String, required: false }, // Optional: Track sessions
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
