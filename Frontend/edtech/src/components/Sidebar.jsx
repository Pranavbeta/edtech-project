import { FaGraduationCap, FaBook, FaCalendarAlt, FaCommentDots, FaChartBar, FaSignOutAlt,FaMoon ,FaSun } from 'react-icons/fa';

const Sidebar = ({ toggleDarkMode, profile, isSidebarOpen, toggleSidebar, toggleForum, darkMode,handlelogout}) => {
  return (
    <aside className={`w-64 bg-white dark:bg-gray-800 shadow-lg ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">ELEMES</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="flex items-center p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FaGraduationCap className="mr-4" />
            <span> Dashboard</span>
          </li>
          <li className="flex items-center p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FaBook className="mr-4" />
            <span>Course</span>
          </li>
          <li className="flex items-center p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FaCalendarAlt className="mr-4" />
            <span>Schedule</span>
          </li>
          <li className="flex items-center p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" onClick={toggleForum}>
            <FaCommentDots className="mr-4" />
            <span>Forum</span>
          </li>
          <li className="flex items-center p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FaChartBar className="mr-4" />
            <span>Score</span>
          </li>
          <li className="flex items-center p-4 text-red-600 dark:text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <FaSignOutAlt className="mr-4" />
            <span onClick={handlelogout}>Log Out</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;