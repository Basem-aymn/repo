import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";
import { FaBoxOpen } from "react-icons/fa";
import image2 from "../assets/pexels-liene-ratniece-570596-1329510.webp";

export default function StandardPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const standardOptions = [
    { title: t("standardCityDelivery"), description: t("standardCityDeliveryDesc"), price: "30 EUR", image: image2 },
    { title: t("standardInterCity"), description: t("standardInterCityDesc"), price: "60 EUR", image: image2 },
    { title: t("standardBulkPackage"), description: t("standardBulkPackageDesc"), price: "90 EUR", image: image2 },
  ];

  return (
    <div className="flex justify-center">
      <div className="container w-[100%] lg:w-[90%]">
        <Nav />
        <section className="py-16 px-6 mt-16">
          <h2 className="text-3xl font-bold text-center uppercase mb-8">{t("standardDeliveryServices")}</h2>
          <p className="text-center text-lg mb-8">{t("standardDescription")}</p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {standardOptions.map((option, index) => (
              <motion.div key={index} className="relative bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full mt-4 md:mt-0 border border-green-200 overflow-hidden group" variants={cardVariants}>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-full shadow-lg">
                  <FaBoxOpen className="text-lg" />
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src={option.image}
                      alt={option.title}
                      loading="lazy"
                      className="w-full h-32 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">{option.title}</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    {option.description}
                  </p>
                  <p className="text-2xl font-bold text-green-600 mb-4">{option.price}</p>
                  <button className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                    {t("orderNow")}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <Footer />
      </div>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
