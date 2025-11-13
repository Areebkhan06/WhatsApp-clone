import React from "react";

const MessageBubble = ({ text, time, isSent }) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} items-start`}>
      <div
        className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] shadow ${
          isSent
            ? "bg-[#005c4b] rounded-br-none text-gray-100"
            : "bg-[#202c33] rounded-bl-none text-gray-200"
        }`}
      >
        {text}
        <span className="text-[10px] text-gray-400 ml-2">{time}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
