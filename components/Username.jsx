"use client";
import React, { useState } from "react";
import { Check, CheckCheck } from "lucide-react";

const Username = () => {
  const [isOnline, setIsOnline] = useState(true); // true = double tick shown

  return (
    <div className="flex items-center gap-3 p-3 hover:bg-[#2a2a2a] rounded-xl transition">
      {/* Profile Image */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-700">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/27603571/pexels-photo-27603571.jpeg"
          alt="Profile"
        />
      </div>

      {/* Chat Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-semibold text-lg">Sameen</h1>{" "}
          <p>03:50 PM</p>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          {isOnline ? (
            <CheckCheck size={16} className="text-blue-500" />
          ) : (
            <Check size={16} />
          )}
          <span>Okay</span>
        </div>
      </div>
    </div>
  );
};

export default Username;
