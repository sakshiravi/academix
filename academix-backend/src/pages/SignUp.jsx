import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate

const SignUp = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form logic here
    navigate("/dashboard"); // ✅ Redirects to dashboard
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">Create an Account</h2>
        <p className="text-sm text-center text-gray-700 mb-8">
          Join <span className="font-semibold text-indigo-600">Academix</span> and start learning today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-700">
          Already have an account?{' '}
          <Link to="/signin" className="text-indigo-700 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUp;
