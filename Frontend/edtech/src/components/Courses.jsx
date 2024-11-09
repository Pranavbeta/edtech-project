import React, { useEffect, useState } from "react";
import axios from "axios";  // Axios to fetch data from the API

// Courses Page Component to show all courses
function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch all courses from the API
    axios
      .get("http://localhost:8000/api/courses/")  // API endpoint to fetch all courses
      .then((response) => {
        setCourses(response.data);  // Save the courses in the state
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="w-full h-auto bg-black p-8 min-h-screen">
      <h1 className="text-4xl text-white mb-8 text-center">All Courses</h1>
      {/* Grid Layout to display the courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Course Image */}
            <img
              src={`${course.image}`}  // Adjust URL for images
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            {/* Course Title */}
            <h2 className="text-white text-xl mb-2">{course.title}</h2>
            {/* Course Description */}
            <p className="text-gray-400">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Courses;
