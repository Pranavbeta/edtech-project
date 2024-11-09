import { motion } from 'framer-motion';

const ForumActivity = ({ isForumOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isForumOpen ? 1 : 0, x: isForumOpen ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-64 p-4"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Forum Activity</h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p>What is the difference between Saw and See?</p>
          <small className="text-gray-500 dark:text-gray-400">Alex Ben | 3:21 PM</small>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p>2022 Hottest Year on Record?</p>
          <small className="text-gray-500 dark:text-gray-400">Penny Angela | 1:24 PM</small>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p>Will the Big 5 Tech co's release abortion policies?</p>
          <small className="text-gray-500 dark:text-gray-400">Leah Hudson | 1:12 PM</small>
        </div>
      </div>
    </motion.div>
  );
};

export default ForumActivity;