import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { processSearchResults } from '../utils/fuzzySearch';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Mock search data - replace with your actual data
  const searchData = [
    { title: 'Home', path: '/', description: 'Main landing page' },
    { title: 'Services', path: '/services', description: 'Our services and offerings' },
    { title: 'About Us', path: '/about', description: 'Learn about our company' },
    { title: 'Contact', path: '/contact', description: 'Get in touch with us' },
    // Add more searchable items
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery) {
      const processed = processSearchResults(searchQuery, searchData, ['title', 'description']);
      setResults(processed);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex].path);
    }
  };

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm text-gray-400 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search...
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-lg">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
            >
              <div className="bg-gray-900 rounded-lg shadow-xl border border-white/20">
                <div className="p-4">
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search..."
                      className="w-full bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                {results.length > 0 && (
                  <div className="border-t border-white/20 py-2 max-h-60 overflow-y-auto">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelect(result.path)}
                        className={`w-full px-4 py-2 text-left transition-colors flex flex-col ${
                          index === selectedIndex
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        <span 
                          dangerouslySetInnerHTML={{ __html: result.highlight }}
                          className="font-medium"
                        />
                        <span className="text-sm text-gray-400">{result.description}</span>
                        <span className="text-xs text-gray-500">{result.path}</span>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery && results.length === 0 && (
                  <div className="border-t border-white/20 px-4 py-8 text-center text-gray-400">
                    No results found for "{searchQuery}"
                  </div>
                )}

                <div className="border-t border-white/20 px-4 py-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <kbd className="px-2 py-1 bg-gray-800 rounded">↑</kbd>
                      <kbd className="px-2 py-1 bg-gray-800 rounded">↓</kbd>
                      <span>to navigate</span>
                    </div>
                    <div className="flex gap-2">
                      <kbd className="px-2 py-1 bg-gray-800 rounded">↵</kbd>
                      <span>to select</span>
                    </div>
                    <div className="flex gap-2">
                      <kbd className="px-2 py-1 bg-gray-800 rounded">esc</kbd>
                      <span>to close</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;
