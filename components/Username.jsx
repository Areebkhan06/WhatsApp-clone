"use client";
import React, { useState } from "react";
import { Check, CheckCheck } from "lucide-react";

const Username = ({ image, name, time, message }) => {
  const [isOnline, setIsOnline] = useState(true); // true = double tick shown

  return (
    <div className="flex items-center gap-3 p-3 hover:bg-[#2a2a2a] rounded-xl transition-colors cursor-pointer">
      {/* Profile Image */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-700 shrink-0">
        <img
          className="w-full h-full object-cover"
          src={image || "/default-avatar.jpg"} // fallback image
          alt={`${name}'s profile`}
        />
      </div>

      {/* Chat Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-semibold text-lg truncate">{name}</h1>
          <p className="text-gray-400 text-sm shrink-0">{time}</p>
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-sm truncate">
          {isOnline ? (
            <CheckCheck size={16} className="text-blue-500 shrink-0" />
          ) : (
            <Check size={16} className="shrink-0" />
          )}
          <span className="truncate">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Username;
