import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the access token from localStorage
        localStorage.removeItem('access_token');

        // Optionally clear any other user data
        // localStorage.removeItem('user_data');

        // Redirect to the login page
        navigate('/login');
    }, [navigate]);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
            <h1 className="text-2xl">Logging out...</h1>
        </div>
    );
};

export default Logout;
