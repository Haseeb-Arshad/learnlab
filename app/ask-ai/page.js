// components/AskAi.js
'use client';

import { useState } from 'react';

export default function AskAi() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([
    { sender: 'ai', message: 'Hello, how can I help you today?' }
  ]);

  const handleSend = () => {
    if (input.trim() === '') return;
    const userMessage = { sender: 'user', message: input.trim() };
    setChat([...chat, userMessage]);

    // Simulate an AI response after 1 second
    setTimeout(() => {
      const aiResponse = { sender: 'ai', message: 'This is a simulated response using all available resources.' };
      setChat(prev => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Ask AI</h2>
      <div className="h-64 overflow-y-auto mb-4 p-4 bg-black/20 rounded-md">
        {chat.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span
              className={`inline-block px-4 py-2 rounded-full ${
                msg.sender === 'user' ? 'bg-blue-500' : 'bg-green-500'
              }`}
            >
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-md focus:outline-none text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
