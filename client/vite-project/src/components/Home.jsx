import { useState } from "react";

export default function Home() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = async () => {
    let localChatHistory = chatHistory
    localChatHistory.push({ sender: "Me", text: inputText })
    setChatHistory(localChatHistory);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5900/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const { reply } = await response.json();
      console.log("chatHistory 1 ", chatHistory);
      localChatHistory.push({ sender: "Simran", text: reply })
        setChatHistory(localChatHistory);
    } catch (error) {
      console.error("AI conversation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleInput();
    }
  };
  console.log("chatHistory ", chatHistory);

  return (
  <>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl  text-blue-400 mb-[20px] font-sans">Welcome to Confident AI</h1>
      <p className="font-serif font-normal text-md text-customGray ">A safe space to share your thoughts and feelings. I'm here to listen and support you.</p>
     <div className="min-h-screen flex flex-col justify-center items-center  text-black">
      
      
      {/* //two */}
      <div className="chat-container bg-white rounded-md shadow-md p-4 h-auto sm:h-[30rem] md:h-[35rem] lg:h-[37rem] overflow-y-auto w-full sm:w-[90%] md:w-[70%] lg:w-[50%] border border-gray-200" >
        <p className=" text-lg sm:text-xl md:text-2xl text-md mb-10 font-semibold text-[rgb(12,10,9)] text-[24px] leading-[24px]">ConfidantAI - Your Emotional Support Companion</p>

        {
        chatHistory.map((message, index) => (
          <div
            key={index}
            className={`chat-message mb-2 ${
              message.sender === "Simran" ? "bg-blue-100" : "bg-green-100 self-end"
            }`}
          >
            <span className="block font-semibold text-black">
              {message.sender === "Simran" ? "Simran" : "Me"}:
            </span>{" "}
            {message.text}
          </div>
        ))
        }


      <div className="mt-[30rem] flex items-center overflow-y-visible ">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Start a conversation..."
          className="flex-grow border rounded-l-md p-2"
        />

        <button
          onClick={handleInput}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md disabled:bg-gray-300  hover:bg-blue-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>

      </div>
      </div>
    </div>
  </>
  );
}