import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
    role: 'student', // default role
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Popup state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/register/', formData);
      console.log('Signup successful:', response.data);
      setIsSubmitted(true); // Show popup on successful signup
      // Reset form data after successful signup
      setFormData({
        username: '',
        email: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: '',
        role: 'student',
      });
      setErrors({});
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      setErrors(error.response.data);
      setIsSubmitted(false); // Hide popup if there's an error
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full bg-black text-white flex flex-col justify-center px-4 py-6"
    >
      <div className="mb-4">
        <h3 className="text-center text-sm uppercase tracking-wider mb-2">Create your unique design</h3>
        <h1 className="text-4xl text-center font-bold mb-4">Sign up account</h1>
        <p className="text-center text-gray-400 mb-4">Enter your personal data to create your account</p>
      </div>

      <div className="flex justify-center mb-4">
        <button className="bg-white text-black font-medium p-2 rounded-full w-12 h-12 mx-2">
          <FaGoogle size={30} />
        </button>
        <button className="bg-white text-black font-medium p-2 rounded-full w-12 h-12 mx-2">
          <FaGithub size={30} />
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-400"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-400"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-400"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-400"
        />
        {errors.password2 && <p className="text-red-500">{errors.password2}</p>}

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-400"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-medium mt-4 hover:bg-gray-200 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-white underline">
          Log in
        </a>
      </p>

      {/* Popup Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white p-4 mt-4 rounded shadow-md text-center"
        >
          Signup successful! Welcome to the platform.
        </motion.div>
      )}
    </motion.div>
  );
};

export default SignUpForm;
