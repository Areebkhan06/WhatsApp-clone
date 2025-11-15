"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { useWhatsapp } from "@/context/WhatsappContext";

const page = () => {
  const router = useRouter();
  const { BackendURL, setUser } = useWhatsapp();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");  // FIXED

  // ✅ Load email safely on client side only
  useEffect(() => {
    const stored = localStorage.getItem("loginEmail");
    if (stored) setEmail(stored);
  }, []);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

  // Handle verification
  const handleVerify = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      const { data } = await axios.post(
        `${BackendURL}/user/verify-otp`,
        { email, otp: enteredOtp },
        { withCredentials: true }
      );

      if (data.success) {
        alert("verified");
        setUser(data.user);
        router.push("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
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
