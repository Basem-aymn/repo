import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShippingFast, FaClock, FaStar, FaBoxOpen, FaBolt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import image1 from "../assets/pexels-chaitaastic-1796705.webp";
import image2 from "../assets/pexels-liene-ratniece-570596-1329510.webp";
import image3 from "../assets/pexels-martijn-stoof-2150654344-33992408.webp";

export default function SecondSection() {
  const { t } = useTranslation();
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
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center uppercase  mb-8">{t('Our Delivery Services')}</h2>
      <motion.div className="flex flex-col md:flex-row justify-center gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full md:max-w-sm flex-shrink-0 mt-4 md:mt-0 border border-blue-200 overflow-hidden group" variants={cardVariants}>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-full shadow-lg">
            <FaShippingFast className="text-xl" />
          </div>
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold shadow-md">
            {t('Popular')}
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img
                src={image1}
                alt="Express Delivery"
                loading="lazy"
                className="w-full h-36 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{t('Express Delivery')}</h3>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              {t('Fast and reliable delivery within 24 hours for urgent packages.')}
            </p>
            <div className="flex items-center justify-center mb-6 bg-blue-50 rounded-full py-2 px-4">
              <FaClock className="text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-blue-700">{t('24 Hours')}</span>
            </div>
            <Link to="/express" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105">
              {t('Order Now')}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
        </motion.div>
        <motion.div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-100 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full md:max-w-sm flex-shrink-0 mt-4 md:mt-0 border border-green-200 overflow-hidden group" variants={cardVariants}>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg">
            <FaBoxOpen className="text-xl" />
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img
                src={image2}
                alt="Standard Delivery"
                loading="lazy"
                className="w-full h-36 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{t('Standard Delivery')}</h3>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              {t('Affordable delivery within 3-5 business days for regular packages.')}
            </p>
            <div className="flex items-center justify-center mb-6 bg-green-50 rounded-full py-2 px-4">
              <FaClock className="text-green-500 mr-2" />
              <span className="text-sm font-semibold text-green-700">{t('3-5 Days')}</span>
            </div>
            <Link to="/standard" className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105">
              {t('Order Now')}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
        </motion.div>
        <motion.div className="relative bg-gradient-to-br from-purple-50 via-white to-violet-100 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full md:max-w-sm flex-shrink-0 mt-4 md:mt-0 border border-purple-200 overflow-hidden group" variants={cardVariants}>
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white p-3 rounded-full shadow-lg">
            <FaBolt className="text-xl" />
          </div>
          <div className="absolute top-4 left-4 bg-orange-400 text-orange-900 px-2 py-1 rounded-full text-xs font-bold shadow-md">
            {t('Premium')}
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img
                src={image3}
                alt="Overnight Delivery"
                loading="lazy"
                className="w-full h-36 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{t('Overnight Delivery')}</h3>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              {t('Premium service for same-day delivery when you need it most.')}
            </p>
            <div className="flex items-center justify-center mb-6 bg-purple-50 rounded-full py-2 px-4">
              <FaClock className="text-purple-500 mr-2" />
              <span className="text-sm font-semibold text-purple-700">{t('Same Day')}</span>
            </div>
            <Link to="/overnight" className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105">
              {t('Order Now')}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
