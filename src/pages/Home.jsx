import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end development services from database design to user interface.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100/30 to-sky-100/30 blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-100/20 to-sky-100/20 blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-20 left-40 w-96 h-96 rounded-full bg-gradient-to-r from-sky-100/30 to-blue-100/30 blur-3xl animate-float-slow" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 leading-tight">
            Transforming Ideas into
            <br />
            Digital Reality
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We create cutting-edge software solutions that drive business growth
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-sky-400 text-white font-medium
                             overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </Link>
            
            <button className="px-6 py-2.5 rounded-lg border-2 border-sky-300/50 bg-white/80 text-sky-500 font-medium 
                             transition-all duration-300 hover:bg-sky-50 hover:border-sky-400/50 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="relative py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Cards */}
          {services.map((service, index) => (
            <div key={index} className="group relative p-6 rounded-2xl bg-white/90 border border-sky-100 shadow-sm 
                                      transition-all duration-500 hover:shadow-lg hover:scale-[1.02] hover:bg-white">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-100 to-sky-100 
                            flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">{service.title}</h3>
              <p className="text-slate-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
