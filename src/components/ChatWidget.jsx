import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from './ui/Toast';

const quickReplies = [
  { text: 'How can I help you?', type: 'greeting' },
  { text: 'Tell me more about your services', type: 'services' },
  { text: 'What are your business hours?', type: 'hours' },
  { text: 'How can I contact support?', type: 'contact' },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (messages.length > 0 && !isOpen) {
      setUnreadCount(prev => prev + 1);
      // Play notification sound
      const audio = new Audio('/notification.mp3');
      audio.play().catch(() => {}); // Ignore errors if sound can't play
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) {
      addToast('Please enter a message', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      // Add user message
      setMessages(prev => [...prev, {
        text: inputValue,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      }]);

      // Clear input and show typing indicator
      setInputValue('');
      setIsTyping(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add bot response
      setMessages(prev => [...prev, {
        text: getAutomatedResponse(inputValue),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }]);

      // Send to backend
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
      setIsTyping(false);
    }
  };

  const getAutomatedResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I assist you today?";
    } else if (lowerMessage.includes('service')) {
      return "We offer a wide range of services. Would you like to know more about a specific service?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our pricing varies based on your needs. Would you like to schedule a consultation?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      return "You can reach our support team at support@example.com or call us at 1-800-123-4567.";
    } else if (lowerMessage.includes('hour')) {
      return "We're open Monday to Friday, 9 AM to 6 PM EST.";
    }
    return "Thanks for your message! Our team will get back to you soon.";
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply.text);
    handleSubmit();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-40 w-80 h-96 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white">Chat Support</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] break-words p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="text-xs text-gray-300 mb-1">
                      {message.timestamp}
                    </div>
                    <div className="whitespace-pre-wrap">
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                  }`}
                >
                  {isSubmitting ? '...' : 'Send'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          )}
        </svg>
      </motion.button>
    </>
  );
};

export default ChatWidget;
