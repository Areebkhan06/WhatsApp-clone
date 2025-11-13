"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MoveUpRight } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    // ✅ Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Email:", email);
    router.push("/verify"); // navigate to verification page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF5EB] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl border border-gray-300 shadow-lg p-8 flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 mb-2"
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Enter your email
        </h1>
        <p className="text-gray-500 text-sm text-center">
          Use your registered email to continue
        </p>

        {/* Input Field */}
        <form
          onSubmit={handleNext}
          className="flex flex-col w-full space-y-4 items-center"
        >
          <div className="flex items-center w-full border border-gray-300 rounded-lg overflow-hidden focus-within:border-green-500">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none text-gray-800 bg-white"
              required
            />
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Next
          </button>
        </form>

        {/* Footer text */}
        <div className="mt-6 space-y-2 text-center">
          <p className="text-xs text-gray-400">
            We’ll send a verification link to your email.
          </p>
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            Don’t have an account?
            <button
              onClick={() => router.push("/signup")}
              className="flex items-center text-green-600 hover:text-green-700 font-medium transition-all"
            >
              Click here
              <MoveUpRight className="w-3 h-3 ml-1" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
