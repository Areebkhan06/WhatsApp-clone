"use client";
import React, { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import { useWhatsapp } from "@/context/WhatsappContext";
import axios from "axios";

const ChatMessages = ({ receiverId }) => {
  const { getMessages, messages } = useWhatsapp();

  // Load chat when receiverId changes
  useEffect(() => {
    if (receiverId) getMessages(receiverId);
  }, [receiverId]);

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
