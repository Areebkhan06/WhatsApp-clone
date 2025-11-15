"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import axios from "axios";
import { useWhatsapp } from "@/context/WhatsappContext";

const SignupClient = () => {
  const { setUser,BackendURL } = useWhatsapp();

  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear specific error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // ✅ Field validations
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.username.trim()) newErrors.username = "Username is required";
    else if (form.username.length < 3)
      newErrors.username = "Username must be at least 3 characters long";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";

    if (!form.password.trim()) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    // ❌ If any validation errors exist, stop here
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { data } = await axios.post(
        `${BackendURL}/user/signup`,
        form,{withCredentials:true}
      );

      if (data.success) {
        setUser(data.user);
        router.push("/dashboard");
      } else {
        alert(data.message);
      }
      alert("Signup successful!");
    } catch (error) {
      console.error("❌ Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FCF5EB] px-4">
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
            alt="WhatsApp Clone Logo"
            className="w-14 h-14"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Create Your Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join <strong>WhatsApp Clone</strong> to connect with your friends
          instantly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-green-500 focus:ring-2 focus:ring-green-100`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={form.username}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.username ? "border-red-500" : "border-gray-300"
              } focus:border-green-500 focus:ring-2 focus:ring-green-100`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-green-500 focus:ring-2 focus:ring-green-100`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:border-green-500 focus:ring-2 focus:ring-green-100`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Button */}
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
    </main>
  );
};

export default SignupClient;
