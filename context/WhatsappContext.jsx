"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // ✅ add this

// ✅ Create the context
const WhatsappContext = createContext();

// ✅ Provider component
export const WhatsappProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get("http://localhost:3015/user/me", {
          withCredentials: true, // ✅ send cookies with the request
        });
        if (data.success) setUser(data.user);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <WhatsappContext.Provider value={{ user, setUser }}>
      {children}
    </WhatsappContext.Provider>
  );
};

// ✅ Custom hook
export const useWhatsapp = () => useContext(WhatsappContext);
