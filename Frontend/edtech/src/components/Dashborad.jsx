import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSun, FaMoon} from 'react-icons/fa';
import Sidebar from './Sidebar';
import ForumActivity from './ForumActivity';
import Chatbot from './Chatbot';

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isForumOpen, setIsForumOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');  // Apply dark mode globally
    } else {
      document.documentElement.classList.remove('dark');  // Remove dark mode globally
    }
  };

  // Toggle Sidebar for Mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle Forum Activity Visibility
  const toggleForum = () => {
    setIsForumOpen(!isForumOpen);
  };

  // Fetch profile using access token
  const fetchProfile = async () => {
    const accessToken = localStorage.getItem('access_token'); // Get access token from localStorage

    if (!accessToken) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users/profile/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setProfile(response.data); // Set user profile data
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      navigate('/login'); // Redirect to login if there's an error
    }
  };

  // Fetch enrolled courses
  const fetchCourses = async () => {
    const enrolledCourses = []; // Replace with real data or API call
    setCourses(enrolledCourses); // Set the enrolled courses data
    setLoading(false); // Stop loading once data is fetched
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  useEffect(() => {
    fetchProfile();
    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        {/* Sidebar */}
        <Sidebar
          navigate={navigate}
          toggleForum={toggleForum}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          handlelogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-8">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">My Course</h2>
            <div className="flex items-center">
              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="mr-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700">
                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
              </button>
              {profile && (
                <>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="ml-2">{profile.first_name} {profile.last_name}</span>
                </>
              )}
            </div>
          </header>

          {/* Course Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.length === 0 ? (
              <div className="flex flex-col items-center">
                <p>No courses enrolled yet.</p>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded" onClick={() => navigate('/courses')}>
                  Explore Courses
                </button>
              </div>
            ) : (
              courses.map((course) => (
                <div key={course.id} className="p-6 bg-blue-500 text-white rounded-lg shadow-md">
                  <h3 className="text-xl">{course.name}</h3>
                  <p>Lecturer: {course.lecturer}</p>
                  <div className="mt-4">
                    <div className="h-1 bg-gray-300 w-full rounded">
                      <div className="h-full bg-yellow-500 rounded" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <p className="mt-2">Class progress: {course.progress}%</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Other Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">GPA</h3>
              <div className="mt-4">
                <div className="text-4xl text-green-500">3.5</div>
                <p className="text-gray-500 dark:text-gray-400">Keep it up!</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Attendance</h3>
              <p className="text-4xl">64</p>
              <p className="text-gray-500 dark:text-gray-400">Total Sessions Done</p>
            </div>
          </div>
        </div>

        {/* Forum Activity */}
        <ForumActivity isForumOpen={isForumOpen} />

        {/* Chatbot Toggle Button */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-blue-500 p-4 rounded-lg text-white shadow-md">
            <p>Ask any question below, and our chatbot will assist you.</p>
            <button
              className="mt-4 bg-white text-blue-500 p-2 rounded"
              onClick={toggleChatbot}
            >
              {isChatbotOpen ? 'Close Chatbot' : 'Open Chatbot'}
            </button>
          </div>
        </div>

        {/* Chatbot Window */}
        {isChatbotOpen && (
          <div className="fixed bottom-16 right-8 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg w-80">
            <h3 className="text-xl font-semibold">Chat with us!</h3>
            <div className="mt-4">
              {<Chatbot />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

