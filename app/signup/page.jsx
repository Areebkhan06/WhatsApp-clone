"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const SignupPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone || !form.password) {
      alert("Please fill all fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid Indian number");
      return;
    }

    console.log("Signup Data:", form);
    router.push("/verify"); // Move to OTP verify
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF5EB] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl border border-gray-300 shadow-lg p-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="self-start text-gray-600 hover:text-green-600 flex items-center gap-2 text-sm"
        >
          <MoveLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-14 h-14"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Create Your Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join WhatsApp Clone to connect with your friends instantly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
          />

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-green-500">
            <span className="bg-gray-100 px-3 py-2 text-gray-700 font-medium">
              +91
            </span>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="flex-1 px-3 outline-none"
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/")}
            className="text-green-600 font-medium hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
