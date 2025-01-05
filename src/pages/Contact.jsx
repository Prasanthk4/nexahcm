import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import PageTransition from '../components/transitions/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 p-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-teal-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 pt-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/90 max-w-2xl mx-auto"
            >
              Let's discuss your project and explore how we can work together to achieve your goals.
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">contact@nexahcm.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+91 8644934132</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Click to chat</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-sky-500 to-sky-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Hyderabad, Telangana</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-gray-300 mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FaTwitter className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub className="text-white text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
