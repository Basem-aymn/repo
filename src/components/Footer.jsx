import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('Fast Delivery')}</h3>
            <p className="text-gray-300">{t('Reliable and fast delivery services for all your needs. We ensure your packages arrive safely and on time.')}</p>
            <p className="text-gray-300 mt-4">{t('Copyright © 2024 – Isaii-AI')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">{t('Home')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">{t('Services')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">{t('About Us')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">{t('Contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Contact Info')}</h3>
            <p className="text-gray-300 mb-2">Email: info@fastdelivery.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-300">Address: 123 Delivery St, City, State 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Follow Us')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
