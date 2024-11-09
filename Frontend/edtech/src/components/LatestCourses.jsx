import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // For making API calls
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaWindows } from "react-icons/fa";  // Windows-style icon

// Right Section: Dynamic Course Cards with animation
// Right Section: Latest courses with an "Explore More" button
function LatestCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the latest 5 courses
    axios
      .get("http://localhost:8000/api/courses/?limit=5")  // Ensure it returns only the top 5 courses
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 1, duration: 0.6 },
    }),
  };

  return (
    <div className="w-full md:w-1/2 h-auto bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <img
            src={`${course.image}`}
            alt={course.title}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-white text-xl mb-2">{course.title}</h2>
          <p className="text-gray-400">{course.description}</p>
          <div className="text-gray-300"><MdKeyboardDoubleArrowRight/></div>
        </motion.div>
      ))}

      {/* Explore More Button placed next to the last card */}
      <motion.div
        className="bg-black p-6 rounded-lg flex justify-center items-center shadow-lg hover:bg-gray-600 transition"
        custom={courses.length}  // Set custom delay for the button animation
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Link to="/courses">
          <FaWindows size={30} className="text-white" />
        </Link>
        <p className="text-gray-400">Explore More</p>
      </motion.div>
    </div>
  );
}
export default LatestCourses;