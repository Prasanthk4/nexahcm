import React from 'react';

const SEO = ({ 
  title = 'NexaHCM',
  description = 'Comprehensive HR management solutions designed to transform and streamline your business operations.',
  keywords = 'HR management, HR solutions, business operations, employee management, HR software',
  image = '/og-image.jpg',
  type = 'website'
}) => {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;

  React.useEffect(() => {
    // Basic Meta Tags
    document.title = title;
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:image', `${siteUrl}${image}`, 'property');
    updateMetaTag('og:site_name', 'NexaHCM', 'property');
    
    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${siteUrl}${image}`);
    
    // Other Important Meta Tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('author', 'NexaHCM');
    updateMetaTag('language', 'English');
  }, [title, description, keywords, image, type, siteUrl, currentUrl]);

  const updateMetaTag = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  return null;
};

export default SEO;
