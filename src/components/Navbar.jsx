// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 
                    w-[95%] md:w-[90%] lg:w-[80%] px-6 py-3 
                    bg-white/90 backdrop-blur-lg border border-white/30 
                    rounded-full shadow-2xl z-50 transition-all">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
          <img
            src={logo}
            alt="Academix Logo"
            className="h-12 w-12 object-contain border border-white shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold tracking-wide text-indigo-700">Academix</h1>
            <span className="text-[10px] italic text-indigo-700">
              Master Anything. Anytime. Anywhere.
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-indigo-700 text-sm font-medium">
          <li className="hover:text-pink-400 transition"><Link to="/">Home</Link></li>
          <li className="hover:text-pink-400 transition"><Link to="/courses">Courses</Link></li>
          <li className="hover:text-pink-400 transition"><Link to="/about">About</Link></li>
          <li className="hover:text-pink-400 transition"><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-indigo-700 hover:text-pink-500 transition duration-150" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link to="/dashboard" className="hover:scale-105 transition">
            <img
              src={profile}
              alt="Profile"
              className="h-9 w-9 rounded-full border-2 border-indigo-600 shadow-md"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
