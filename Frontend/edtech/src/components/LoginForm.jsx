import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();  // Initialize navigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/login/', {
                username: formData.username, // Make sure this matches your API
                password: formData.password,
            });

            const { access } = response.data; // Extract access token
            console.log('Login successful:', response.data);

            // Store access token
            localStorage.setItem('access_token', access);

            setIsLoggedIn(true);
            setErrors({});
            setLoading(false);

            // Fetch user profile after login and redirect
            await getProfile(access);
            navigate('/dashboard');  // Redirect to the dashboard after login

        } catch (error) {
            console.error('Login failed:', error.response?.data || error);
            setErrors(error.response?.data || {});
            setIsLoggedIn(false);
            setLoading(false);
        }
    };

    const getProfile = async (accessToken) => {
        try {
            const profileResponse = await axios.get('http://127.0.0.1:8000/api/users/profile/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Pass the access token for authentication
                },
            });
            console.log('Profile data:', profileResponse.data);
        } catch (error) {
            console.error('Profile fetch failed:', error.response?.data || error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-screen w-screen flex items-center justify-center bg-black"
        >
            <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-4xl text-center font-bold mb-4">Login to your account</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border focus:border-blue-500"
                    />
                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border focus:border-blue-500"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-lg font-medium mt-4 hover:bg-gray-200 transition"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {isLoggedIn && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-green-500 text-white p-4 mt-4 rounded shadow-md text-center"
                    >
                        Login successful! Profile fetched successfully.
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default LoginForm;


