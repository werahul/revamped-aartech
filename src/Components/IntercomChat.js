import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

const IntercomChat = () => {
  useEffect(() => {
    Intercom({
      app_id: "rbpazxtv", // Replace with your actual Intercom App ID
    });
  }, []);

  return null; // No UI needed, Intercom handles the chat widget
};

export default IntercomChat;
