"use client";
import React, { useState } from "react";
import { SendHorizontal, Laugh } from "lucide-react";
import axios from "axios";
import { useWhatsapp } from "@/context/WhatsappContext";

const MessageInput = ({ receiverId }) => {
  const { BackendURL,getMessages } = useWhatsapp();
  const [message, setMessage] = useState("");
  console.log(receiverId);
  

  const sendMessage = async () => {
    if (!message.trim()) return; // prevent empty message

    try {
      const { data } = await axios.post(
        `${BackendURL}/user/message`,
        { receiverId, message },
        { withCredentials: true }
      );

      if (data.success) {
        setMessage(""); // clear input after sending
        getMessages(receiverId)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#202c33] p-3 fixed bottom-0 w-[90%] sm:w-[83%] flex items-center gap-3 z-10 rounded-t-lg">
      <button className="text-zinc-500 hover:text-zinc-300">
        <Laugh />
      </button>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        placeholder="Type a message"
        rows="1"
        className="flex-1 bg-[#2a3942] text-white px-4 py-2 rounded-2xl outline-none placeholder-gray-400 resize-none max-h-32 overflow-y-auto no-scrollbar"
      />

      <button
        onClick={sendMessage}
        className="hover:bg-[#2f2f2f] p-2 rounded-full text-zinc-300 transition"
      >
        <SendHorizontal />
      </button>
    </div>
  );
};

export default MessageInput;
