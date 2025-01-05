import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import PageTransition from '../components/transitions/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-4 pt-28 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main blurred circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-200/30 rounded-full blur-2xl"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-sky-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-blue-100/40 rounded-full blur-xl"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-32 left-1/2 w-8 h-8 border border-blue-300/30 rounded-lg transform rotate-45"></div>
          <div className="absolute top-1/2 right-32 w-6 h-6 border border-sky-300/30 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border border-blue-300/30 rounded-full"></div>
          
          {/* Dots pattern */}
          <div className="absolute top-20 right-40 w-2 h-2 bg-blue-400/40 rounded-full"></div>
          <div className="absolute top-24 right-36 w-2 h-2 bg-sky-400/30 rounded-full"></div>
          <div className="absolute top-28 right-44 w-2 h-2 bg-blue-400/40 rounded-full"></div>
          
          {/* Light beams */}
          <div className="absolute top-0 left-1/3 w-1 h-32 bg-gradient-to-b from-blue-300/30 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-0 right-1/4 w-1 h-40 bg-gradient-to-t from-sky-300/30 to-transparent transform -rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 pt-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-blue-800 max-w-2xl mx-auto"
            >
              Let's discuss your project and explore how we can work together to achieve your goals.
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.a
              href="mailto:contact@nexahcm.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-blue-200/30 hover:bg-blue-100/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2 group-hover:text-blue-700">Email</h3>
              <p className="text-blue-800 group-hover:text-blue-600 transition-colors duration-300">contact@nexahcm.com</p>
            </motion.a>

            <motion.a
              href="tel:+918644934132"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-blue-200/30 hover:bg-blue-100/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2 group-hover:text-blue-700">Phone</h3>
              <p className="text-blue-800 group-hover:text-blue-600 transition-colors duration-300">+91 8644934132</p>
            </motion.a>

            <motion.a
              href="https://wa.me/918644934132"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-blue-200/30 hover:bg-blue-100/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2 group-hover:text-blue-700">WhatsApp</h3>
              <p className="text-blue-800 group-hover:text-blue-600 transition-colors duration-300">Click to chat</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-blue-200/30 hover:bg-blue-100/20 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2">Location</h3>
              <p className="text-blue-800">Hyderabad, Telangana</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto bg-white/20 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/30 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-900 mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/50 border border-blue-200/50 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/50 border border-blue-200/50 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-blue-900 mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-white/50 border border-blue-200/50 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-blue-900 mb-2 text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/50 border border-blue-200/50 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
            <h3 className="text-blue-900 mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-100/30 transition-all duration-300 group"
              >
                <FaTwitter className="text-blue-600 text-xl group-hover:text-blue-700" />
              </a>
              <a
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-100/30 transition-all duration-300 group"
              >
                <FaLinkedin className="text-blue-600 text-xl group-hover:text-blue-700" />
              </a>
              <a
                href="#"
                className="bg-white/20 p-3 rounded-full hover:bg-blue-100/30 transition-all duration-300 group"
              >
                <FaGithub className="text-blue-600 text-xl group-hover:text-blue-700" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
