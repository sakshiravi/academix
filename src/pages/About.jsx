import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-indigo-100 via-white to-indigo-200">
      <Navbar />

      {/* Animated Background Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-80 h-80 bg-indigo-300 opacity-30 rounded-full -top-20 -left-20"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full top-1/3 left-1/2"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-indigo-400 opacity-20 rounded-full -bottom-24 right-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-40 px-6 pb-20 max-w-6xl mx-auto text-center text-indigo-700">
        <h1 className="text-5xl font-bold mb-6">About Academix</h1>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
          Academix is not just a learning platform — it’s a movement. Built for the curious, the driven, and the dreamers,
          we bring together top-tier content and immersive experiences to help you master anything, anytime, anywhere.
        </p>

        {/* Vision, Mission, Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
          {[
            { title: "Our Vision", text: "To redefine learning through innovation, accessibility, and purpose—empowering individuals to build skills that shape the future." },
            { title: "Our Mission", text: "We strive to deliver high-quality, engaging content that’s industry-relevant and continuously evolving. Learn with ease, grow with impact." },
            { title: "Our Goals", text: "To offer 100+ practical courses, enable community collaboration, and make learning joyful and transformative for everyone." }
          ].map((section, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-indigo-700 mb-3">{section.title}</h2>
              <p className="text-gray-700">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <section className="mb-20 text-left">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Our Journey</h2>
          <ul className="border-l-4 border-indigo-600 pl-6 space-y-6 text-gray-700">
            <li>
              <h4 className="font-semibold text-indigo-700">2022 – Idea Spark</h4>
              <p>Academix began as a vision to revolutionize e-learning accessibility for all students and professionals.</p>
            </li>
            <li>
              <h4 className="font-semibold text-indigo-700">2023 – MVP Launched</h4>
              <p>Our beta version launched with 10 flagship courses and support from early community adopters.</p>
            </li>
            <li>
              <h4 className="font-semibold text-indigo-700">2024 – Growth & Innovation</h4>
              <p>We expanded to 100+ courses and introduced personalized dashboards, AI recommendations, and live mentorship.</p>
            </li>
          </ul>
        </section>

        {/* Meet the Team */}
        <section className="mb-20 text-left">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sakshi Ravi", role: "Founder & Lead Developer", image: "https://i.pinimg.com/736x/55/5c/69/555c69cf40ce8a3029de1f2e7f661b10.jpg" },
              { name: "Aruna Ravi", role: "Community Head", image: "https://i.pinimg.com/736x/4d/a7/85/4da7852cd8d1673b38ca81cf1b4ba4be.jpg" },
              { name: "Neha Ravi", role: "Platform Architect", image: "https://i.pinimg.com/736x/fc/82/85/fc8285bbf079ce8ca88592176f11c7b6.jpg" }
            ].map((member, i) => (
              <div key={i} className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
                <img src={member.image} alt={member.name} className="mx-auto rounded-full mb-4 w-24 h-24 object-cover" />
                <h4 className="text-lg font-bold text-indigo-700">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stats */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Our Impact</h2>
          <div className="flex flex-wrap justify-center gap-12 mt-6 text-indigo-700 font-bold">
            <div><span className="text-4xl">25K+</span><br />Learners</div>
            <div><span className="text-4xl">100+</span><br />Courses</div>
            <div><span className="text-4xl">4.9★</span><br />Avg Rating</div>
            <div><span className="text-4xl">200+</span><br />Mentors & Experts</div>
          </div>
        </section>

        {/* Testimonials */}
        {/* Testimonials */}
           {/* Testimonials - Sliding Carousel */}
<section className="mb-24 text-center overflow-hidden">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-10">What Learners Say</h2>
  <div className="relative w-full max-w-5xl mx-auto">
    <motion.div
      className="flex space-x-6"
      initial={{ x: 0 }}
      animate={{ x: ['0%', '-100%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }}
    >
      {[
        {
          quote: "Academix helped me switch careers into tech. Their hands-on content and mentor support are game-changers.",
          author: "– Aadhya R.",
        },
        {
          quote: "I loved the UI/UX and how easy it is to track progress. Learned React from scratch here!",
          author: "– Rohit V.",
        },
        {
          quote: "The mentors are so friendly and the community is inspiring. I never felt alone while learning.",
          author: "– Nikhil S.",
        },
        {
          quote: "I cracked my first internship interview thanks to the DevOps course on Academix. Totally worth it!",
          author: "– Priya T.",
        },
        {
          quote: "As a beginner, I never expected to enjoy learning this much. Everything is so well structured!",
          author: "– Sneha M.",
        },
        {
          quote: "Academix's self-paced model let me learn at night after my job. Super helpful!",
          author: "– Karan J.",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="min-w-[300px] max-w-sm bg-white/90 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
        >
          <p className="text-gray-800 italic mb-4">“{testimonial.quote}”</p>
          <footer className="text-sm font-semibold text-indigo-600">{testimonial.author}</footer>
        </div>
      ))}
    </motion.div>
  </div>
</section>


        {/* FAQ */}
        <section className="text-left">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-bold text-indigo-700">Is Academix free?</h4>
              <p>We offer both free and premium courses. Many foundational lessons are accessible for free.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">Do I get certificates?</h4>
              <p>Yes, every course comes with a certificate of completion verified by instructors.</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-700">Can I learn at my own pace?</h4>
              <p>Absolutely. All courses are self-paced, accessible 24/7 from any device.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
