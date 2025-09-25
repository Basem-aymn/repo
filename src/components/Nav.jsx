import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="fixed top-0 w-[90%] md:w-[60%] bg-white rounded-b-4xl border-[1px] border-gray-400 flex justify-between items-center pb-3.5 z-50">
        <p className="ml-2">logo</p>
        <ul className="hidden md:flex list-none m-0 p-4 justify-center">
          <li className="mr-6 text-black cursor-pointer">Home</li>
          <li className="mr-6 text-black cursor-pointer">About</li>
          <li className="mr-6 text-black cursor-pointer">Services</li>
          <li className="text-black cursor-pointer">Contact</li>
        </ul>
        <button className="md:hidden mr-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="block w-5 h-0.5 bg-black mb-1"></span>
            <span className="block w-5 h-0.5 bg-black mb-1"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
          </div>
        </button>
      </nav>
      {isOpen && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-white border border-gray-400 rounded-b-4xl md:hidden">
          <ul className="flex flex-col list-none m-0 p-4">
            <li className="mb-2 text-black cursor-pointer">Home</li>
            <li className="mb-2 text-black cursor-pointer">About</li>
            <li className="mb-2 text-black cursor-pointer">Services</li>
            <li className="text-black cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
