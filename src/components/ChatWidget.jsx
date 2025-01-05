import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from './ui/Toast';
import { db } from '../config/firebase';
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';

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
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const fileInputRef = useRef(null);
  const { addToast } = useToast();

  // Initialize chat session
  useEffect(() => {
    if (isOpen && !sessionId) {
      const newSessionId = `session_${Date.now()}`;
      setSessionId(newSessionId);
      
      // Create a new chat session in Firestore
      addDoc(collection(db, 'chatSessions'), {
        sessionId: newSessionId,
        startTime: serverTimestamp(),
        status: 'active',
        userAgent: navigator.userAgent,
        platform: navigator.platform
      });
    }
  }, [isOpen, sessionId]);

  // Listen for messages
  useEffect(() => {
    if (!sessionId) return;

    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'), limit(50));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = [];
      snapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    if (messages.length > 0 && !isOpen) {
      setUnreadCount(prev => prev + 1);
      const audio = new Audio('/notification.mp3');
      audio.play().catch(() => {});
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
    if (!inputValue.trim() || !sessionId) return;

    setIsSubmitting(true);
    try {
      // Add message to Firestore
      await addDoc(collection(db, 'chatSessions', sessionId, 'messages'), {
        text: inputValue,
        sender: 'user',
        timestamp: serverTimestamp(),
        status: 'sent'
      });

      setInputValue('');
      setIsTyping(true);

      // Simulate bot typing
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add bot response to Firestore
      await addDoc(collection(db, 'chatSessions', sessionId, 'messages'), {
        text: getAutomatedResponse(inputValue),
        sender: 'bot',
        timestamp: serverTimestamp(),
        status: 'sent'
      });

    } catch (error) {
      console.error('Error sending message:', error);
      addToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
      setIsTyping(false);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // TODO: Implement file upload to Firebase Storage
    addToast('File upload coming soon!', 'info');
  };

  const getAutomatedResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Enhanced responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "👋 Hello! Welcome to NexaHCM. How can I assist you today?";
    } else if (lowerMessage.includes('service')) {
      return "🚀 We offer comprehensive HR management solutions including:\n\n" +
             "• Payroll Management\n" +
             "• Employee Onboarding\n" +
             "• Performance Tracking\n" +
             "• Leave Management\n\n" +
             "Which service would you like to know more about?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "💼 Our pricing is customized based on your organization's needs. Would you like to:\n\n" +
             "1. Schedule a consultation\n" +
             "2. Get a custom quote\n" +
             "3. See our pricing packages";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      return "📞 You can reach us through:\n\n" +
             "• Phone: +91 9849214132\n" +
             "• Email: nexahcm@gmail.com\n" +
             "• Office: Monday to Friday, 9 AM to 6 PM IST";
    }
    return "Thanks for your message! Our team will review it and get back to you soon. In the meantime, feel free to explore our services or ask any other questions!";
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
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Chat Support</h3>
                <div className="flex items-center space-x-2">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm text-green-400">Online</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <div
                  key={message.id}
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
                      {message.timestamp?.toDate().toLocaleTimeString()}
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
            <form onSubmit={handleSubmit} className="p-4 border-t border-blue-200/10">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-blue-200 hover:text-blue-100 transition-colors"
                >
                  <FaPaperclip className="w-5 h-5" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-blue-900/20 text-white placeholder-blue-200/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  className="p-2 text-blue-200 hover:text-blue-100 transition-colors"
                >
                  <FaSmile className="w-5 h-5" />
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !inputValue.trim()}
                  className={`p-2 text-blue-200 hover:text-blue-100 transition-colors ${
                    isSubmitting || !inputValue.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <FaPaperPlane className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget;
