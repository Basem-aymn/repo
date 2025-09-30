import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/01273388957"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 sm:p-4"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
    </a>
  );
}
