"use client";
import ChatMessages from "@/components/ChatMessages";
import MessageInput from "@/components/MessageInput";
import Navbar from "@/components/Navbar";
import { useWhatsapp } from "@/context/WhatsappContext";
import React, { useEffect } from "react";

const DashboardPage = () => {
  const { selectedChat } = useWhatsapp();
  
  
  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Select a chat to start messaging 💬
      </div>
    );
  }
  return (
    <>
    <Navbar name={selectedChat.name} image={selectedChat.image} />
    <section className="relative min-h-screen w-full text-white">
      {/* Background */}
      <img
        src="/images/mobileBGImage.jpg"
        alt="WhatsApp background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0b141a]/80" />

      {/* Chat layout */}
      <div className="relative z-10 flex flex-col h-screen justify-between">
        <ChatMessages receiverId={selectedChat.id} />
        <MessageInput receiverId={selectedChat.id} />
      </div>
    </section>
    </>
  );
};

export default DashboardPage;
