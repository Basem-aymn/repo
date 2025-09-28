import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";
import image1 from "../assets/pexels-chaitaastic-1796705.webp";
import image2 from "../assets/pexels-liene-ratniece-570596-1329510.webp";
import image3 from "../assets/pexels-martijn-stoof-2150654344-33992408.webp";
import image4 from "../assets/pexels-chaitaastic-1796705.webp";
import image5 from "../assets/pexels-liene-ratniece-570596-1329510.webp";
import image6 from "../assets/pexels-martijn-stoof-2150654344-33992408.webp";

export default function PackagesPage() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const packages = [
    { title: t("cityToAirport"), description: t("cityToAirportDesc"), price: "200 EUR", image: image1 },
    { title: t("airportToCity"), description: t("airportToCityDesc"), price: "180 EUR", image: image2 },
    { title: t("interCityTransfer"), description: t("interCityTransferDesc"), price: "300 EUR", image: image3 },
    { title: t("airportRoundTrip"), description: t("airportRoundTripDesc"), price: "350 EUR", image: image4 },
    { title: t("cityTourPackage"), description: t("cityTourPackageDesc"), price: "250 EUR", image: image5 },
    { title: t("longDistanceDelivery"), description: t("longDistanceDeliveryDesc"), price: "400 EUR", image: image6 },
  ];

  return (
    <div className="flex justify-center">
      <div className="container w-[100%] lg:w-[90%]">
        <Nav />
        <section className="py-16 px-6 mt-16">
          <h2 className="text-3xl font-bold text-center uppercase mb-8">{t("ourPackages")}</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} className="p-6 rounded shadow text-center w-full" variants={cardVariants}>
                <div className="card bg-base-100 w-full shadow-sm">
                  <figure>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{pkg.title}</h2>
                    <p>{pkg.description}</p>
                    <p className="text-2xl font-bold text-green-600">{pkg.price}</p>
                    <div className="card-actions justify-end">
                      <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 cursor-pointer">{t("bookNow")}</button>
                    </div>
                  </div>
                </div>
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
