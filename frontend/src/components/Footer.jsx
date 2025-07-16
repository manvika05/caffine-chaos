import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Cafe Information */}
        <div>
          <h3 className="text-xl font-serif text-amber-400 mb-4 tracking-wider">CAFFEINE & CHAOS</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-amber-400/80" />
              <p>123 Elegance Street<br />Coffee District<br />City, CC 10001</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-amber-400/80" />
              <a href="tel:+11234567890" className="hover:text-amber-400 transition">+1 (123) 456-7890</a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400/80" />
              <a href="mailto:info@caffeineandchaos.com" className="hover:text-amber-400 transition">info@caffeineandchaos.com</a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-amber-400 mb-4 flex items-center gap-2">
            <FaClock /> HOURS
          </h4>
          <div className="text-gray-400 space-y-2">
            <p className="flex justify-between">
              <span>Monday - Friday:</span> <span>7am - 10pm</span>
            </p>
            <p className="flex justify-between">
              <span>Saturday - Sunday:</span> <span>8am - 11pm</span>
            </p>
            <p className="pt-4 text-sm text-amber-400/70">
              *Holiday hours may vary
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-amber-400 mb-4">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/menu" className="text-gray-400 hover:text-amber-400 transition duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-amber-400 transition duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/reservation" className="text-gray-400 hover:text-amber-400 transition duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-amber-400 mb-4">CONNECT WITH US</h4>
          <div className="flex gap-4 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300 p-2 border border-gray-700 hover:border-amber-400 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300 p-2 border border-gray-700 hover:border-amber-400 rounded-full"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition duration-300 p-2 border border-gray-700 hover:border-amber-400 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
          
          <div className="mt-6">
            <h4 className="text-amber-400 mb-3">NEWSLETTER</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none transition"
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-500 text-black font-medium py-2 px-4 rounded-sm transition duration-300 border border-amber-700 text-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-amber-900/30 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Caffeine & Chaos. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-amber-400 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;