// ✅ This is a SERVER component
export const metadata = {
  title: "Sign Up | WhatsApp Clone",
  description:
    "Create your account on WhatsApp Clone to chat instantly with friends. Fast, secure, and easy signup using your phone number.",
  keywords: [
    "WhatsApp Clone",
    "Chat App Signup",
    "React Messaging App",
    "Realtime Chat",
    "MERN Stack WhatsApp",
  ],
  openGraph: {
    title: "Sign Up | WhatsApp Clone",
    description:
      "Join WhatsApp Clone and connect instantly. Simple signup using your name and phone number.",
    url: "https://yourdomain.com/signup",
    siteName: "WhatsApp Clone",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
        width: 1200,
        height: 630,
        alt: "WhatsApp Clone Sign Up",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import SignupClient from "./SignupClient";

export default function Page() {
  return <SignupClient />;
}
