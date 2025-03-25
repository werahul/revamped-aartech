import React, { useState } from "react";

const WhatsAppWidget = () => {
  const [isChatVisible, setIsChatVisible] = useState(true); // Controls visibility of "Chat With Us"
  const phoneNumber = "9418509967"; // Replace with your WhatsApp number
  const message = "Hello! I am interested in learning more about Aartech Solonics."; // Default message

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Outer container */}
      <div className={`flex flex-col items-center space-y-2 transition-all duration-500 ${isChatVisible ? "h-auto" : "h-[60px]"}`}>
        
        {/* "Chat With Us" Section */}
{ /*       {isChatVisible && (
          <div
            className="flex items-center justify-between bg-black text-white rounded-full px-4 py-2 shadow-lg cursor-pointer w-full transition-all duration-300 hover:scale-105"
            onClick={openWhatsApp}
          >
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm font-medium">Chat With Us</span>
            </div>

           
            <button
              className="ml-3 text-white text-lg font-bold hover:text-green-400 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the WhatsApp link
                setIsChatVisible(false); // Hide "Chat With Us"
              }}
            >
              ×
            </button>
          </div>
        )}*/}

        {/* WhatsApp Floating Icon */}
        <div
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={openWhatsApp}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-[60px] h-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
