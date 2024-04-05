import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UsePageViews = () => {
  let location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-6KLWYEWW0Y', {
        page_path: location.pathname,
      });
    } else {
      console.warn('gtag not defined');
    }
  }, [location]);
};

export default UsePageViews;