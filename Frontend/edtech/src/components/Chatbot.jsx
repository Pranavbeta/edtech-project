import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = async () => {
        if (message.trim() === '') return;

        try {
            // Add user's message to chat log
            setChatLog([...chatLog, { sender: 'user', text: message }]);

            // Send POST request to backend API
            const response = await axios.post('http://127.0.0.1:8000/api/chatbot/response/', {
                message: message
            });

            // Add chatbot's response to chat log
            setChatLog([...chatLog, { sender: 'user', text: message }, { sender: 'bot', text: response.data.response }]);

        } catch (error) {
            console.error('Error:', error);
        }

        // Clear the input field
        setMessage('');
    };

    return (
        <div className="chatbot-container">
            <div className="chat-log">
                {chatLog.map((entry, index) => (
                    <div key={index} className={`chat-message ${entry.sender}`}>
                        <span>{entry.text}</span>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
