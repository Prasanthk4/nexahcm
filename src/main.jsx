import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

// Use createRoot for better performance
const container = document.getElementById('root');
const root = createRoot(container);

// Get the base URL from the environment or default to '/'
const baseUrl = import.meta.env.GITHUB_PAGES === 'true' ? '/nexahcm' : '';

// Disable strict mode in production for better performance
const app = import.meta.env.DEV ? (
  <React.StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
) : (
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

root.render(app);
