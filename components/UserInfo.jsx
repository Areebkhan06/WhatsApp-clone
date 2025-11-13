"use client"
import React from "react";
import { useWhatsapp } from "@/context/WhatsappContext";

const UserInfo = () => {
  const { user } = useWhatsapp(); // ✅ get user from context

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full sm:w-80 bg-[#1f1f1f] text-white flex flex-col items-center py-6 rounded-2xl shadow-lg">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="mt-4 text-2xl font-semibold">{user.name}</h2>
      <p className="text-gray-400 text-sm">@{user.username}</p>

      <div className="w-full mt-6 px-6 space-y-3 text-gray-300">
        <p>📧 {user.email}</p>
        <p>💬 {user.about || "Hey there! I’m using WhatsApp."}</p>
        <p>⏰ Last seen: {user.lastSeen || "Recently active"}</p>
        <p>👥 Friends: {user.friends?.length || 0}</p>
      </div>
    </div>
  );
};

export default UserInfo;
