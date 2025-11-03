import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

// ✅ Dashboard metadata for SEO
export const metadata = {
  title: "Dashboard | WhatsApp Clone",
  description:
    "Manage your chats, contacts, and account settings from your personalized WhatsApp Clone dashboard.",
  keywords: [
    "WhatsApp Clone Dashboard",
    "Chat Management",
    "Messaging App",
    "Realtime Chat Dashboard",
    "User Panel",
  ],
  openGraph: {
    title: "Dashboard | WhatsApp Clone",
    description:
      "Access your WhatsApp Clone dashboard to manage messages and settings securely.",
    url: "https://yourdomain.com/dashboard",
    siteName: "WhatsApp Clone",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
        width: 1200,
        height: 630,
        alt: "WhatsApp Clone Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: false, // Prevent indexing private dashboard pages
    follow: true,
  },
};

// ✅ Layout structure
export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-red-300 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 ml-10 sm:ml-80 min-h-screen flex flex-col">
          {/* Header */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1">{children}</main>

          
        </div>
      </body>
    </html>
  );
}
