"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  User,
  Settings,
  Phone,
  ListFilterPlus,
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
      <aside className="hidden sm:flex w-80 h-screen bg-[#181818] text-white fixed left-0 top-0">
        {/* Left vertical menu */}
        <div className="w-11 bg-zinc-800 h-full flex flex-col items-center justify-between pt-5">
          <div>
            <button className="w-5 h-5 mb-10">
              <Menu />
            </button>
            <div className="flex flex-col items-center gap-5">
              <button className="p-1 rounded-full">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="p-1 rounded-full">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-1 rounded-full">
                <LoaderCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mb-3">
            <button>
              <Settings className="w-5 h-5" />
            </button>
            <img
              className="w-8 h-8 bg-zinc-700 rounded-full p-1"
              src="/images/icons8-user-48.png"
              alt="Default User"
            />
          </div>
        </div>

        {/* Right chat list */}
        <div className="flex-1 flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h1 className="text-xl font-semibold">Chats</h1>
            <button className="p-2 rounded-full hover:bg-gray-700 transition">
              <ListFilterPlus className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 p-2 overflow-y-auto">
            <Username />
          </nav>
        </div>
      </aside>

      {/* ✅ Mobile Menu Bar (always visible) */}
      <div className="sm:hidden fixed top-0 left-0 w-11 bg-zinc-800 text-white h-full flex flex-col items-center justify-between pt-5 z-40">
        <div>
          <button onClick={() => setOpen(!open)} className="w-5 h-5 mb-10">
            <Menu />
          </button>
          <div className="flex flex-col items-center gap-5">
            <button className="p-1 rounded-full">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full">
              <Phone className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full">
              <LoaderCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mb-3">
          <button>
            <Settings className="w-5 h-5" />
          </button>
          <img
            className="w-8 h-8 bg-zinc-700 rounded-full p-1"
            src="/images/icons8-user-48.png"
            alt="Default User"
          />
        </div>
      </div>

      {/* ✅ Mobile Chat Drawer with transition */}
      <div
        className={`sm:hidden fixed top-0 left-11 w-[89%] h-full bg-black text-white transform transition-transform duration-300 ease-in-out z-30 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Chats</h1>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-2 overflow-y-auto">
          <Username />
          <Username />
          <Username />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
