import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, User, BarChart2 } from "lucide-react";

const Dashboard = () => {
  const userName = "Sakshi";

  const stats = [
    { icon: <BookOpenCheck className="text-indigo-600" size={24} />, title: "Courses Enrolled", value: 8 },
    { icon: <User className="text-purple-600" size={24} />, title: "Your Instructors", value: 5 },
    { icon: <BarChart2 className="text-pink-600" size={24} />, title: "Completion Rate", value: "65%" },
  ];

  const courses = [
    "React Essentials",
    "AWS Fundamentals",
    "UI/UX Bootcamp",
    "Python for ML",
    "Docker & Kubernetes",
    "DevOps with GitHub Actions",
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Welcome */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Welcome back, {userName}! 👋
        </motion.h1>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Here's a summary of your learning activity.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-md p-5 flex items-center gap-4"
            >
              <div className="bg-gray-100 p-3 rounded-full">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{stat.title}</h3>
                <p className="text-gray-700 text-xl">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses */}
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const progress = Math.floor(Math.random() * 100);
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-sm p-5 transition-all"
              >
                <h3 className="text-lg font-semibold text-indigo-700">{course}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-2">Progress: {progress}%</p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
