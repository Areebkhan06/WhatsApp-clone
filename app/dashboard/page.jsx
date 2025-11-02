import React from "react";

// ✅ SEO metadata for the main dashboard page
export const metadata = {
  title: "User Dashboard | WhatsApp Clone",
  description:
    "Access your WhatsApp Clone dashboard to manage chats, profile, and settings all in one place.",
  openGraph: {
    title: "User Dashboard | WhatsApp Clone",
    description:
      "View and manage your messages, profile, and account settings on your WhatsApp Clone dashboard.",
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
    index: false, // prevent indexing of user dashboard
    follow: true,
  },
};

const DashboardPage = () => {
  return (
    <section className="min-h-screen p-6 bg-[#212121] text-white">
      
    </section>
  );
};

export default DashboardPage;
