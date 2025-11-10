"use client";
import React, { useState } from "react";
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

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside className="hidden sm:flex w-80 h-screen bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] text-white fixed left-0 top-0 shadow-2xl">
        {/* Left vertical menu */}
        <div className="w-11 bg-linear-to-b from-zinc-900 to-zinc-950 h-full flex flex-col items-center justify-between pt-5 border-r border-white/5">
          <div>
            <button className="w-5 h-5 mb-10 hover:scale-110 transition-transform duration-200">
              <Menu className="text-white" />
            </button>
            <div className="flex flex-col items-center gap-5">
              <button className="p-1 rounded-full hover:bg-purple-500/20 transition-all duration-200 relative group">
                <MessageCircle className="w-4 h-4 text-gray-300 group-hover:text-purple-400 transition-colors" />
                <div className="absolute -right-1 -top-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </button>
              <button className="p-1 rounded-full hover:bg-blue-500/20 transition-all duration-200 group">
                <Phone className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </button>
              <button className="p-1 rounded-full hover:bg-pink-500/20 transition-all duration-200 group">
                <LoaderCircle className="w-4 h-4 text-gray-300 group-hover:text-pink-400 transition-colors" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mb-3">
            <button className="hover:rotate-90 transition-transform duration-300">
              <Settings className="w-5 h-5 text-gray-400 hover:text-purple-400" />
            </button>
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0  rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <img
                className="w-8 h-8 bg-zinc-700 rounded-full p-1 relative"
                src="/images/icons8-user-48.png"
                alt="Default User"
              />
            </div>
          </div>
        </div>

        {/* Right chat list */}
        <div className="flex-1 flex-col backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <h1 className="text-xl font-bold text-white bg-clip-text ">
              Chats
            </h1>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-110">
              <Filter className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 p-2 overflow-y-auto">
            <Username />
            <Username />
            <Username />
            <Username />
            <Username />
          </nav>
        </div>
      </aside>

      {/* ✅ Mobile Menu Bar (always visible) */}
      <div className="sm:hidden fixed top-0 left-0 w-11 bg-linear-to-b from-zinc-900 to-zinc-950 text-white h-full flex flex-col items-center justify-between pt-5 z-40 border-r border-white/5">
        <div>
          <button onClick={() => setOpen(!open)} className="w-5 h-5 mb-10 hover:scale-110 transition-transform duration-200">
            <Menu className="text-white" />
          </button>
          <div className="flex flex-col items-center gap-5">
            <button className="p-1 rounded-full hover:bg-purple-500/20 transition-all duration-200 relative group">
              <MessageCircle className="w-4 h-4 text-gray-300 group-hover:text-purple-400 transition-colors" />
              <div className="absolute -right-1 -top-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </button>
            <button className="p-1 rounded-full hover:bg-blue-500/20 transition-all duration-200 group">
              <Phone className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </button>
            <button className="p-1 rounded-full hover:bg-pink-500/20 transition-all duration-200 group">
              <LoaderCircle className="w-4 h-4 text-gray-300 group-hover:text-pink-400 transition-colors" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mb-3">
          <button className="hover:rotate-90 transition-transform duration-300">
            <Settings className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </button>
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0  rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img
              className="w-8 h-8 bg-zinc-700 rounded-full p-1 relative"
              src="/images/icons8-user-48.png"
              alt="Default User"
            />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Chat Drawer with transition */}
      <div
        className={`sm:hidden fixed top-0 left-11 w-[89%] h-full bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] text-white transform transition-transform duration-300 ease-in-out z-30 shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <h1 className="text-xl font-bold text-white bg-clip-text ">
            Chats
          </h1>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-2 overflow-y-auto">
          <Username />
          <Username />
          <Username />
          <Username />
          <Username />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;