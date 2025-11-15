import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";



// ✅ Layout structure
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-[#181818] text-white">
        
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 ml-10 sm:ml-80 min-h-screen flex flex-col">

            {/* Page content */}
            <main className="flex-1">{children}</main>
          </div>
      </body>
    </html>
  );
}
