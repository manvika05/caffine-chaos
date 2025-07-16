import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-xl border-b border-amber-900/30">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition duration-300 font-serif tracking-wider"
          >
            CAFFEINE & CHAOS
          </Link>

          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              >
                Contact
              </Link>
              <Link 
                to="/reservation" 
                className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              >
                Reservations
              </Link>
              <Link 
                to="/online-ordering" 
                className="bg-amber-600 text-black px-4 py-2 rounded-sm hover:bg-amber-500 font-medium transition duration-300 border border-amber-700"
              >
                ORDER ONLINE
              </Link>
              
              {isLoggedIn ? (
                <button 
                  onClick={toggleAuth}
                  className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <button 
                  onClick={toggleAuth}
                  className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-200 focus:outline-none"
              type="button"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4 transition-all duration-300 bg-black/95`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              onClick={toggleMobileMenu}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link 
              to="/reservation" 
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300"
              onClick={toggleMobileMenu}
            >
              Reservations
            </Link>
            <Link 
              to="/online-ordering" 
              className="bg-amber-600 text-black px-4 py-2 rounded-sm hover:bg-amber-500 font-medium transition duration-300 border border-amber-700 text-center"
              onClick={toggleMobileMenu}
            >
              ORDER ONLINE
            </Link>
            <button 
              onClick={() => {
                toggleAuth();
                toggleMobileMenu();
              }}
              className="text-gray-200 hover:text-amber-400 font-medium transition duration-300 text-left"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;