import React  from "react";
import { motion } from "framer-motion";


function AboutSection() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="w-full px-4 py-6 bg-black text-white flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Our Platform</h2>
        <p className="text-center text-gray-400 max-w-2xl">
          Our platform provides comprehensive online courses designed to help you
          learn the latest skills in technology, data science, cloud computing,
          and more. Whether you are a beginner or looking to advance your career,
          our courses are designed for everyone.
        </p>
      </motion.div>
    );
  }
export default AboutSection;