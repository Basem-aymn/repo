import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('About Us')}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('Welcome to our fast and reliable delivery service, inspired by the convenience of Uber. We specialize in providing seamless delivery solutions for packages of all sizes, ensuring they reach their destination quickly, safely, and on time. Our mission is to make logistics effortless for businesses and individuals alike.')}
        </motion.p>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('What We Offer')}</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• {t('Express Delivery: Urgent packages delivered within 24 hours.')}</li>
              <li>• {t('Standard Delivery: Affordable service within 3-5 business days.')}</li>
              <li>• {t('Overnight Delivery: Premium same-day delivery for critical needs.')}</li>
              <li>• {t('Secure Packaging: Ensuring your items arrive in perfect condition.')}</li>
              <li>• {t('Real-time Tracking: Monitor your package every step of the way.')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('Our Drivers\' Skills')}</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• {t('Professional Training: Certified in safe driving and customer service.')}</li>
              <li>• {t('Punctuality: Committed to meeting delivery schedules.')}</li>
              <li>• {t('Experience: Years of expertise in logistics and navigation.')}</li>
              <li>• {t('Customer Focus: Dedicated to providing excellent service and support.')}</li>
              <li>• {t('Safety First: Adhering to all road safety regulations.')}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
