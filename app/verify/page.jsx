"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const page = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle OTP input changes
  const handleChange = (value, index) => {
    // Allow only a single digit (0–9)
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input automatically when a digit is entered
      if (value && index < 5) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

  // Handle OTP verification
  const handleVerify = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    console.log("Entered OTP:", enteredOtp);
    router.push("/home"); // Navigate after verification
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF5EB] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl border border-gray-300 shadow-lg p-8 flex flex-col items-center space-y-6">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="self-start text-gray-600 hover:text-green-600 flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* WhatsApp logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 mb-2"
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Verify your number
        </h1>
        <p className="text-gray-500 text-sm text-center">
          Enter the 6-digit code sent to your phone number
        </p>

        {/* OTP input fields */}
        <form
          onSubmit={handleVerify}
          className="flex flex-col items-center w-full space-y-6"
        >
          <div className="flex justify-between w-full max-w-xs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  // Go back on Backspace if box is empty
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    const prev = document.getElementById(`otp-${index - 1}`);
                    prev?.focus();
                  }
                }}
                className="w-10 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:border-green-500 outline-none"
              />
            ))}
          </div>

          {/* Verify button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Verify
          </button>
        </form>

        {/* Resend code */}
        <p className="text-xs text-gray-500 text-center mt-3">
          Didn’t receive the code?{" "}
          <button
            onClick={() => alert("OTP resent!")}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default page;
