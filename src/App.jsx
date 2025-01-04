import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/helpers/ScrollToTop';
import LoadingBar from './components/ui/LoadingBar';
import BackToTop from './components/ui/BackToTop';
import SEO from './components/SEO';
import Preload from './components/Preload';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import CookieConsent from './components/CookieConsent';
import { ToastProvider } from './components/ui/Toast';
import ChatWidget from './components/ChatWidget';
import Search from './components/Search';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500/20"></div>
      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  useKeyboardNavigation();

  return (
    <ToastProvider>
      <div className="bg-gray-50 min-h-screen">
        <SEO />
        <Preload />
        <ScrollToTop />
        <LoadingBar />
        <Navbar>
          <Search />
        </Navbar>
        <AnimatePresence mode="wait">
          <main className="relative">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </AnimatePresence>
        <BackToTop />
        <CookieConsent />
        <ChatWidget />
      </div>
    </ToastProvider>
  );
}

export default App;
