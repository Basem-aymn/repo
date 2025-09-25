import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/pexels-chaitaastic-1796705.jpg";
import image2 from "../assets/pexels-liene-ratniece-570596-1329510.jpg";
import image3 from "../assets/pexels-martijn-stoof-2150654344-33992408.jpg";

export default function SecondSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center uppercase  mb-8">Our Delivery Services</h2>
      <motion.div className="flex flex-col md:flex-row justify-center gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="p-8 md:p-6 rounded shadow text-center w-full md:max-w-sm flex-shrink-0" variants={cardVariants}>
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src={image1}
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Express Delivery</h2>
              <p>
                Fast and reliable delivery within 24 hours for urgent packages.
              </p>
              <div className="card-actions justify-end">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 cursor-pointer">Order Now</button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="p-8 md:p-6 rounded shadow text-center w-full md:max-w-sm flex-shrink-0" variants={cardVariants}>
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src={image2}
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Standard Delivery</h2>
              <p>
                Affordable delivery within 3-5 business days for regular packages.
              </p>
              <div className="card-actions justify-end">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 cursor-pointer">Order Now</button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="p-8 md:p-6 rounded shadow text-center w-full md:max-w-sm flex-shrink-0" variants={cardVariants}>
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                src={image3}
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Overnight Delivery</h2>
              <p>
                Premium service for same-day delivery when you need it most.
              </p>
              <div className="card-actions justify-end">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 cursor-pointer">Order Now</button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
