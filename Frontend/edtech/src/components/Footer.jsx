import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";  

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">  {/* Ensure full width */}
      <div className="container mx-auto px-4">  {/* Use container to center content */}
        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Ed-Tech Platform</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <a href="/about" className="hover:underline text-white">
              About Us
            </a>
            <a href="/courses" className="hover:underline text-white">
              Courses
            </a>
            <a href="/contact" className="hover:underline text-white">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:underline text-white">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF size={20} />  {/* Facebook Icon */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-600">
              <FaTwitter size={20} />  {/* Twitter Icon */}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />  {/* Instagram Icon */}
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedin size={20} />  {/* LinkedIn Icon */}
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 Ed-Tech Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

