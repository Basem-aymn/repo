import React from "react";
import image from "../assets/pexels-matreding-31452657.jpg";
export default function HeroSection() {
  return (
    <section className="h-[750px] flex flex-col md:flex-row justify-center items-center pt-40 pb-36 px-6">
      <div className="  flex justify-center flex-wrap mb-4  w-[100%]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Fast & Reliable Delivery Services
        </h1>
        <h3 className="text-gray-600 text-lg md:text-[20px] lg:text-3\2xl w-[450px]   ">
          Get your packages delivered quickly and safely<br />just like Uber !
        </h3>
      </div>
      <div className="w-auto h-auto flex justify-center md:justify-end items-center">
        <img
          src={image}
          alt=""
          className="w-full md:w-80 lg:w-9/12 h-auto object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}
