"use client";
import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  User,
  Settings,
  Phone,
  Filter,
  LoaderCircle,
  Menu,
  X,
} from "lucide-react";
import Username from "./Username";
import { useWhatsapp } from "@/context/WhatsappContext";
import Link from "next/link";
import axios from "axios";

const Sidebar = () => {
  const { user, BackendURL } = useWhatsapp();
  const [open, setOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    if (user?.friends) {
      setFriends(user.friends);
      
    }
  }, [user]);

  const addFriend = async () => {
    try {
      const { data } = await axios.post(
        `${BackendURL}/user/add-friend`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside className="hidden sm:flex w-80 h-screen bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] text-white fixed left-0 top-0 shadow-lg border-r border-white/10">
        {/* Left Toolbar */}
        <div className="w-12 bg-linear-to-b from-zinc-900 to-zinc-950 h-full flex flex-col items-center justify-between py-6 border-r border-white/5">
          <div className="flex flex-col items-center gap-6">
            <button className="hover:scale-110 transition-transform duration-200">
              <Menu className="text-gray-300 hover:text-purple-400" size={20} />
            </button>

            <button className="p-1.5 rounded-full hover:bg-purple-500/20 transition-all duration-200 relative group">
              <MessageCircle className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
              <div className="absolute -right-1 -top-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </button>

            <button className="p-1.5 rounded-full hover:bg-blue-500/20 transition-all duration-200 group">
              <Phone className="w-5 h-5 text-gray-300 group-hover:text-blue-400" />
            </button>

            <button
              onClick={addFriend}
              className="p-1.5 rounded-full hover:bg-pink-500/20 transition-all duration-200 group"
            >
              <LoaderCircle className="w-5 h-5 text-gray-300 group-hover:text-pink-400" />
            </button>
          </div>

          {/* Bottom icons */}
          <div className="flex flex-col items-center gap-6">
            <button className="hover:rotate-90 transition-transform duration-300">
              <Settings className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            </button>

            <Link href="/about" className="relative group cursor-pointer">
              <img
                src={user?.profilePic || "/images/icons8-user-48.png"}
                alt="User Avatar"
                className="w-9 h-9 bg-zinc-700 rounded-full p-1 border border-white/10 hover:scale-110 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>

        {/* Chat List Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 pb-5 border-b border-white/10 bg-white/5">
            <h1 className="text-lg font-semibold text-white">Chats</h1>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <Filter className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          {/* Chat List */}
          <nav className="flex flex-col gap-2 p-2 overflow-y-auto no-scrollbar flex-1">
            {friends.length > 0 ? (
              friends.map((f, index) => (
                <Username
                  key={index}
                  id={f._id}
                  name={f.name}
                  image={f.profilePic || "/images/icons8-user-48.png"}
                  message={f.lastMessage || "Say hi 👋"}
                  time={f.lastSeen || "Now"}
                />
              ))
            ) : (
              <p className="text-center text-gray-400 mt-10 text-sm">
                No friends found
              </p>
            )}
          </nav>
        </div>
      </aside>

      {/* ✅ Mobile Sidebar Toggle */}
      <div className="sm:hidden fixed top-0 left-0 w-12 h-full bg-linear-to-b from-zinc-900 to-zinc-950 text-white flex flex-col items-center justify-between py-6 z-40 border-r border-white/5">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="hover:scale-110 transition-transform duration-200"
          >
            <Menu className="text-gray-300" />
          </button>
          <MessageCircle className="w-5 h-5 text-gray-300" />
          <Phone className="w-5 h-5 text-gray-300" />
          <LoaderCircle className="w-5 h-5 text-gray-300" />
        </div>

        <div className="flex flex-col items-center gap-6">
          <Settings className="w-5 h-5 text-gray-400" />
          <img
            src={user?.profilePic || "/images/icons8-user-48.png"}
            alt="User"
            className="w-9 h-9 rounded-full bg-zinc-700 p-1"
          />
        </div>
      </div>

      {/* ✅ Mobile Drawer */}
      <div
        className={`sm:hidden fixed top-0 left-12 w-[calc(100%-3rem)] h-full bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] text-white transform transition-transform duration-300 ease-in-out z-30 shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <h1 className="text-lg font-semibold text-white">Chats</h1>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-all hover:rotate-90"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-2 overflow-y-auto no-scrollbar flex-1">
          {friends.length > 0 ? (
            friends.map((f, index) => (
              <Username
                key={index}
                name={f.name}
                image={f.profilePic || "/images/icons8-user-48.png"}
                message={f.lastMessage || "Say hi 👋"}
                time={f.lastSeen || "Now"}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 mt-10 text-sm">
              No chats yet
            </p>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
