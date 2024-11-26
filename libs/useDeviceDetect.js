"use client"
import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width <= 480) {
        setDevice({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
        });
      } else if (width <= 768) {
        setDevice({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
        });
      } else {
        setDevice({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        });
      }
    };

    handleResize(); // Set initial state based on the initial window size

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export default useDeviceDetect;
