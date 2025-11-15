"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // ✅ add this

// ✅ Create the context
const WhatsappContext = createContext();

// ✅ Provider component
export const WhatsappProvider = ({ children }) => {
  const BackendURL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3015";
  const [user, setUser] = useState(null);
  const [selectedChat, setselectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(`${BackendURL}/user/me`, {
          withCredentials: true, // ✅ send cookies with the request
        });
        if (data.success) setUser(data.user);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const getMessages = async (receiverId) => {
    try {
      const { data } = await axios.post(
        `${BackendURL}/user/get-messages`,
        { receiverId },
        { withCredentials: true }
      );

      // Format messages for frontend bubble
      const formatted = data.messages.map((msg) => ({
        id: msg._id,
        text: msg.message,
        time: new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSent: msg.isSender, // backend should send this flag or compare IDs
      }));

      setMessages(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WhatsappContext.Provider
      value={{
        BackendURL,
        user,
        setUser,
        selectedChat,
        setselectedChat,
        messages,
        setMessages,
        getMessages,
      }}
    >
      {children}
    </WhatsappContext.Provider>
  );
};

// ✅ Custom hook
export const useWhatsapp = () => useContext(WhatsappContext);
