import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import PageTransition from '../components/transitions/PageTransition';
import { sendContactForm } from '../config/firebase';
import { useToast } from '../components/ui/Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      const result = await sendContactForm(formData);
      console.log('Form submission result:', result);
      
      if (result.success) {
        addToast('Message sent successfully! We will get back to you soon.', 'success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      addToast(error.message || 'Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 p-4 pt-28 relative overflow-hidden">
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
              href="tel:+919849214132"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-blue-200/30 hover:bg-blue-100/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-blue-900 font-semibold mb-2 group-hover:text-blue-700">Phone</h3>
              <p className="text-blue-800 group-hover:text-blue-600 transition-colors duration-300">+91 9849214132</p>
            </motion.a>

            <motion.a
              href="https://wa.me/919849214132"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-900 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-blue-900 placeholder-blue-900/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-blue-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-blue-900 placeholder-blue-900/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-blue-900 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-blue-900 placeholder-blue-900/50"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-blue-900 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 text-blue-900 placeholder-blue-900/50 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
