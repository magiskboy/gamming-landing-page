import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00E5FF] rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF00FF] rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            GAME <span className="text-[#00E5FF]">TOGETHER</span>. WIN <span className="text-[#00E5FF]">TOGETHER</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Join thousands of gamers aged 16-35 for weekly tournaments, instant matchmaking, and a buzzing community – all for free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-[#00E5FF] text-black font-bold text-lg uppercase tracking-wider hover:bg-[#00d0e6] transition-all duration-300 transform hover:scale-105 rounded-lg">
              Join the Club – Free Membership
            </button>
            <button className="px-8 py-4 border-2 border-[#FF00FF] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#FF00FF] transition-all duration-300 rounded-lg">
              View Tournaments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;