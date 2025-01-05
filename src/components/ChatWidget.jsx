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
  const chatRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
            ref={chatRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[32rem] bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-200/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-blue-200/10 bg-gradient-to-r from-blue-500/20 to-blue-600/20">
              <h3 className="text-xl font-semibold text-white">Chat Support</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] break-words p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500/30 text-white'
                        : 'bg-slate-700/40 text-white'
                    }`}
                  >
                    <div className="text-xs text-blue-100/70 mb-1">
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
                  <div className="bg-slate-700/40 text-white px-4 py-2 rounded-xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-blue-200/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-blue-200/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-blue-200/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 0 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-4 py-2 text-sm bg-blue-500/20 hover:bg-blue-500/30 text-white rounded-xl transition-all hover:scale-105"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-blue-200/10 bg-gradient-to-r from-blue-500/20 to-blue-600/20">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-slate-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-white placeholder-blue-100/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-500/20 text-white rounded-xl transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500/30 hover:scale-105'
                  }`}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-transform hover:scale-110 ${
          unreadCount > 0 ? 'animate-bounce' : ''
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z"
              />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
};

export default ChatWidget;
