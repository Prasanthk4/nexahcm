import { useEffect } from 'react';

const Preload = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = href;
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload critical images
    const preloadImage = (src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Add your critical resources here
    const criticalResources = {
      fonts: [
        // Add your font URLs here
      ],
      images: [
        // Add critical image URLs here
      ]
    };

    // Preload fonts
    criticalResources.fonts.forEach(preloadFont);
    
    // Preload images
    criticalResources.images.forEach(preloadImage);

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default Preload;
