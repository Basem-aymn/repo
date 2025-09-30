import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 text-white p-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-180 transition-all duration-500 animate-pulse sm:p-4 sm:bottom-6 sm:left-6 sm:text-2xl"
      aria-label="Back to top"
    >
      <FaArrowUp className="text-xl sm:text-2xl" />
    </button>
  );
}
