"use client";
import ChatMessages from "@/components/ChatMessages";
import MessageInput from "@/components/MessageInput";
import React from "react";

const DashboardPage = () => {
  return (
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
        <ChatMessages/>
        <MessageInput />
      </div>
    </section>
  );
};

export default DashboardPage;
