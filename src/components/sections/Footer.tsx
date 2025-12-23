import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E5FF]"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">GAMING CLUB</h2>
            <p className="text-gray-500 mt-2">Play, Compete, Connect</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <span className="sr-only">Discord</span>
              <span className="text-2xl">🎮</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <span className="sr-only">Twitter</span>
              <span className="text-2xl">🐦</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <span className="sr-only">Twitch</span>
              <span className="text-2xl">📺</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <span className="sr-only">YouTube</span>
              <span className="text-2xl">📺</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Gaming Club. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;