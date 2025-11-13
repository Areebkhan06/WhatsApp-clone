import React from "react";
import MessageBubble from "./MessageBubble";

const messages = [
  { id: 1, text: "Hey there 👋", time: "3:45 PM", isSent: false },
  { id: 2, text: "How’s it going?", time: "3:46 PM", isSent: true },
];

const ChatMessages = () => {
  return (
    <div
      className="flex-1 p-4 overflow-y-auto space-y-3 no-scrollbar"
      style={{ paddingBottom: "80px" }}
    >
      {messages.map((msg) => (
        <MessageBubble key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default ChatMessages;
