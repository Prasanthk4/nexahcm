import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useKeyboardNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only handle if no input/textarea is focused
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }

      switch (event.key) {
        case 'h':
          if (event.altKey) navigate('/');
          break;
        case 's':
          if (event.altKey) navigate('/services');
          break;
        case 'a':
          if (event.altKey) navigate('/about');
          break;
        case 'c':
          if (event.altKey) navigate('/contact');
          break;
        case 'Escape':
          // Close any open modals or dropdowns here
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};

export default useKeyboardNavigation;
