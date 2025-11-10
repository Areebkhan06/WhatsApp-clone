import React from "react";
import { Video, Phone, Search } from "lucide-react";
const Navbar = () => {
  return (
    <header className="border-b border-zinc-600 bg-[#212121] text-white shadow-10sm p-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <h1 className="bg-red-400 w-11 h-11 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            alt=""
          />
        </h1>
        <p className="font-semibold ">Sameer GYm</p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center rounded-lg overflow-hidden mr-3">
          <h1 className="bg-zinc-800 p-1 px-3 sm:p-2 border-r border-zinc-700">
            <Video className="w-5 sm:w-10" />
          </h1>
          <h1 className="bg-zinc-800 p-1 px-3 sm:p-2">
            <Phone className="w-5 sm:w-10" />
          </h1>
        </div>
        <h1>
          <Search className="w-5 sm:w-10" />
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
