import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    const botReply = getBotReply(userInput);

    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setUserInput("");
  };

  const getBotReply = (input) => {
    const message = input.toLowerCase();
    if (message.includes("help")) return "Sure! What do you need help with?";
    if (message.includes("feedback")) return "We appreciate your feedback! Please share your thoughts.";
    if (message.includes("return")) return "You can return products within 30 days.";
    return "Sorry, I didn’t get that. Can you please rephrase?";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={toggleChat} className="bg-blue-600 text-black p-3 rounded-full shadow-lg">
        💬
      </button>

      {isOpen && (
        <div className="w-80 h-96 bg-black shadow-lg rounded-lg mt-2 flex flex-col">
          <div className="p-3 font-semibold bg-blue-500 text-black rounded-t-lg">KickCraze 👟</div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`text-sm p-2 rounded ${msg.sender === "user" ? "bg-gray-900 self-end text-right" : "bg-blue-500 self-start"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="ml-2 text-blue-600 font-bold">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
