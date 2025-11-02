import React from "react";
import { MessageCircle, User, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden w-80 h-screen bg-[#181818] text-white sm:flex fixed left-0 top-0">
        <div className="w-11 bg-red-200 h-full"></div>
        <div className="hidden flex-1 flex-col">
          <h1 className="text-2xl font-bold mb-6 text-center">WhatsApp</h1>

          <nav className="flex flex-col gap-3">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-700 transition">
              <MessageCircle size={18} /> Chats
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-700 transition">
              <User size={18} /> Profile
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-700 transition">
              <Settings size={18} /> Settings
            </button>
          </nav>
        </div>
      </aside>
      {/* mobile menu */}
      <div className="sm:hidden fixed top-0 left-0 w-11 bg-red-200 h-full"></div>
    </>
  );
};

export default Sidebar;
