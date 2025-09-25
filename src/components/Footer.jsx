import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
            <p className="text-gray-300">Reliable and fast delivery services for all your needs. We ensure your packages arrive safely and on time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">Email: info@fastdelivery.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-300">Address: 123 Delivery St, City, State 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Fast Delivery Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
