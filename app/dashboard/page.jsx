"use client";
import React from "react";
import { SendHorizontal, Laugh } from "lucide-react";
// ✅ SEO metadata for the main dashboard page
// export const metadata = {
//   title: "User Dashboard | WhatsApp Clone",
//   description:
//     "Access your WhatsApp Clone dashboard to manage chats, profile, and settings all in one place.",
//   openGraph: {
//     title: "User Dashboard | WhatsApp Clone",
//     description:
//       "View and manage your messages, profile, and account settings on your WhatsApp Clone dashboard.",
//     url: "https://yourdomain.com/dashboard",
//     siteName: "WhatsApp Clone",
//     images: [
//       {
//         url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
//         width: 1200,
//         height: 630,
//         alt: "WhatsApp Clone Dashboard",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   robots: {
//     index: false, // prevent indexing of user dashboard
//     follow: true,
//   },
// };

const DashboardPage = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <img
        src="/images/mobileBGImage.jpg"
        alt="WhatsApp background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b141a]/80"></div>

      {/* Chat area */}
      <div className="relative z-10 flex flex-col justify-between h-screen">
        {/* Messages area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Example messages */}
          <div className="mb-2 text-sm text-gray-300">Hey there 👋</div>
          <div className="mb-2 text-sm text-gray-300">How’s it going?</div>
        </div>

        {/* Input area (chat bar) */}
        <div className="bg-[#212121] p-3 fixed bottom-0 w-[90%] sm:w-[83%] flex items-center gap-2 z-10">
          <button className="text-zinc-500 hover:text-zinc-300">
            <Laugh />
          </button>

          <textarea
            placeholder="Type a message"
            rows="1"
            className="flex-1 bg-[#2a2a2a] text-white px-4 py-2 rounded-2xl outline-none placeholder-gray-400 resize-none max-h-32 overflow-y-auto"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />

          <button className="hover:bg-[#2f2f2f] p-2 rounded-full font-medium text-zinc-300">
            <SendHorizontal />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
