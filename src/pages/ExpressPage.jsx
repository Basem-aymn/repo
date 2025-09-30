import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";
import { FaShippingFast } from "react-icons/fa";
import image1 from "../assets/pexels-chaitaastic-1796705.webp";

export default function ExpressPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const expressOptions = [
    { title: t("expressCityDelivery"), description: t("expressCityDeliveryDesc"), price: "50 EUR", image: image1 },
    { title: t("expressInterCity"), description: t("expressInterCityDesc"), price: "100 EUR", image: image1 },
    { title: t("expressAirportTransfer"), description: t("expressAirportTransferDesc"), price: "80 EUR", image: image1 },
  ];

  return (
    <div className="flex justify-center">
      <div className="container w-[100%] lg:w-[90%]">
        <Nav />
        <div className="overflow-hidden bg-gradient-to-r from-yellow-400 to-pink-400 text-white py-2 mb-8 rounded-lg mt-16">
          <div className="whitespace-nowrap animate-marquee text-center font-semibold text-lg">
            🎉 {t("Great discount on express delivery! 15% off this week!")} 🎉 {t("Great discount on express delivery! 15% off this week!")} 🎉
          </div>
        </div>
        <section className="py-16 px-6 mt-8">
          <h2 className="text-3xl font-bold text-center uppercase mb-8">{t("expressDeliveryServices")}</h2>
          <p className="text-center text-lg mb-8">{t("expressDescription")}</p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expressOptions.map((option, index) => (
              <motion.div key={index} className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full mt-4 md:mt-0 border border-yellow-200 overflow-hidden group" variants={cardVariants}>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-2 rounded-full shadow-lg">
                  <FaShippingFast className="text-lg" />
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{option.title}</h3>
                  <p className="text-yellow-700 mb-3 leading-relaxed text-sm">
                    {option.description}
                  </p>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">{option.price}</p>
                  <button className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                    {t("orderNow")}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
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
