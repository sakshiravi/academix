import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Required for routing

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 bg-[length:200%_200%] animate-gradient-xy text-white overflow-hidden">
      <div className="px-6 py-24 md:py-32 text-center max-w-5xl mx-auto z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Master Anything. <br /> Anytime. Anywhere.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl mb-10 text-white/90"
        >
          Kickstart your learning journey with top-tier courses on <span className="font-bold">Academix</span>.
        </motion.p>

        {/* Explore Courses Button */}
        <Link to="/courses">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2 mx-auto mb-6"
          >
            Explore Courses <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>

      {/* Optional Glow Effect */}
      <div className="absolute w-[1000px] h-[1000px] bg-white opacity-10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Features Section */}
      <div className="relative bg-white text-indigo-700 mt-20 py-16 px-6 md:px-10 z-10 rounded-t-full-[3rem]">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Academix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from professionals with real-world experience.",
            },
            {
              title: "Flexible Learning",
              desc: "Learn at your own pace with lifetime access.",
            },
            {
              title: "Practical Projects",
              desc: "Apply what you learn through real projects.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/90 p-6 rounded-xl shadow hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="py-20 px-6 md:px-10 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-500 text-white z-10 relative">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Web Dev", "AI & ML", "Cloud", "DevOps", "UI/UX", "Marketing", "Data Science", "Mobile Dev"].map(
            (cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 border border-white/30 px-4 py-6 rounded-xl text-center backdrop-blur-md hover:bg-white/30 transition"
              >
                <span className="text-lg font-semibold">{cat}</span>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 px-6 text-center text-indigo-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to start learning?
        </motion.h2>
        <p className="text-lg mb-8">
          Join thousands of learners who are upgrading their skills with Academix.
        </p>

        {/* ✅ Updated "Get Started" to Sign Up Route */}
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-semibold transition-all shadow-md"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Home;




/**import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/*const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Master Anything.<br /> Anytime. Anywhere.
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Start your learning journey with the best courses on <span className="font-semibold text-white">Academix</span>.
        </p>
        
        {/* Centered Explore Button */
        /*<div className="flex justify-center">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Explore Courses
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;*/
/**const Home = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 animate-gradient bg-[length:200%_200%]">
      <div className="text-center px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fadeIn">
          Master Anything.<br /> Anytime. Anywhere.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Start your learning journey with the best courses on Academix.
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
          Explore Courses →
        </button>
      </div>

      {/* Optional Glow or Blur Effect */ 
      /**<div className="absolute w-[1000px] h-[1000px] bg-white opacity-10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
};

export default Home;/** */
/**const Home = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center
                 text-white overflow-hidden
                 bg-gradient-to-r from-pink-400 via-indigo-800 to-pink-400
                 bg-[length:200%_200%] animate-gradient-xy"
    >
      <div className="text-center px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fadeIn">
          Master Anything.<br /> Anytime. Anywhere.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Start your learning journey with the best courses on Academix.
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
          Explore Courses →
        </button>
      </div>

      {/* Optional glowing overlay */
      /**<div className="absolute w-[1000px] h-[1000px] bg-white opacity-10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
};

export default Home;
**/