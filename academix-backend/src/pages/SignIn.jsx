import React from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full text-white"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-extrabold text-center mb-6"
        >
          Welcome Back 
        </motion.h2>
        <p className="text-center text-white/80 mb-8">
          Sign in to continue your learning journey with <span className="font-bold">Academix</span>
        </p>

        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <Mail className="absolute top-3.5 left-4 text-indigo-300" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <Lock className="absolute top-3.5 left-4 text-indigo-300" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full bg-white text-indigo-700 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-gray-100 transition-all"
          >
            Sign In
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm mt-6 text-white/80"
        >
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white underline hover:text-indigo-200">
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SignIn;
