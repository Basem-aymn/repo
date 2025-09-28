import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaTruck,
  FaLock,
  FaHeadset,
  FaDollarSign,
  FaGlobe,
  FaRocket,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

export default function TrustSection() {
  const { t } = useTranslation();

  const points = [
    { icon: <FaTruck />, text: t("Reliable and timely delivery services") },
    { icon: <FaLock />, text: t("Secure handling of packages") },
    { icon: <FaHeadset />, text: t("Excellent customer support") },
    { icon: <FaDollarSign />, text: t("Competitive pricing") },
    { icon: <FaGlobe />, text: t("Wide coverage area") },
    { icon: <FaRocket />, text: t("Fast and efficient service") },
  ];

  return (
    <section className="py-16 px-6  text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        {t("Why Should People Trust Us")}
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{point.icon}</div>
            <p className="text-gray-700 font-medium">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
