import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 pt-40 px-6 pb-24 text-indigo-800">
      {/* Animated Background */}
      <motion.div
        className="absolute w-80 h-80 bg-pink-300 opacity-20 rounded-full top-20 left-[-100px] z-0"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-indigo-400 opacity-20 rounded-full bottom-0 right-[-120px] z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Contact Content */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-center text-gray-700 mb-10">
          Have a question, feedback, or collaboration idea? Drop us a message!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block font-normal mb-2">Your Name</label>
            <input
              type="text"
              placeholder="  John Doe"
              className="w-full bg-white hover:bg-indigo-100 text-black py-3 rounded-lg font-semibold transition-all shadow-md border border-indigo-300"

            />
          </div>
          <div>
            <label className="block font-normal mb-2">Email Address</label>
            <input
              type="email"
              placeholder="  you@example.com"
              className="w-full bg-white hover:bg-indigo-100 text-black py-3 rounded-lg font-semibold transition-all shadow-md border border-indigo-300"

            />
          </div>
          <div>
            <label className="block font-normal mb-2">Your Message</label>
            <textarea
              rows="5"
              placeholder="  Write your message here..."
              className="w-full bg-white hover:bg-indigo-100 text-black py-3 rounded-lg font-semibold transition-all shadow-md border border-indigo-300"

            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Optional Support Info */}
        <p className="text-sm text-center text-gray-600 mt-6">
          We usually respond within 24 hours. For urgent inquiries, connect via LinkedIn or email.
        </p>
      </div>
    </div>
  );
};

export default Contact;
