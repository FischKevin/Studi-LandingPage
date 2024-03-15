import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UsePageViews = () => {
  let location = useLocation();
  useEffect(() => {
    window.gtag('config', 'G-6KLWYEWW0Y', {
      page_path: location.pathname,
    });
  }, [location]);
};

export default UsePageViews;
