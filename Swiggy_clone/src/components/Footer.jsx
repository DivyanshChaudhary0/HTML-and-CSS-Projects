
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-10">
      <div className=" w-[80%] mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="mt-2">We provide delicious food delivered to your door.</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <Link to="/menu"><li>Menu</li></Link>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-2">Email: support@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
