'use client';

import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Desktop sticky button */}
      <div className="hidden md:block fixed right-8 bottom-8 z-50">
        {isVisible && (
          <button 
            onClick={scrollToTop}
            className="px-6 py-3 bg-[#00E5FF] text-black font-bold uppercase tracking-wider hover:bg-[#00d0e6] transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105"
          >
            Join Now
          </button>
        )}
      </div>

      {/* Mobile sticky button */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        {isVisible && (
          <button 
            onClick={scrollToTop}
            className="w-full py-4 bg-[#00E5FF] text-black font-bold uppercase tracking-wider hover:bg-[#00d0e6] transition-all duration-300 rounded-lg shadow-lg"
          >
            Join the Club – Free Membership
          </button>
        )}
      </div>
    </>
  );
};

export default StickyCTA;