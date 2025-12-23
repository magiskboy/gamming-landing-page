import React from 'react';

const Community = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">COMMUNITY HUB</h2>
          <p className="text-xl text-gray-300 mb-10">
            Connect with gamers 24/7 in our vibrant community
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#282828] rounded-xl p-8 border border-gray-800 hover:border-[#00E5FF] transition-all duration-300">
            <div className="text-5xl mb-6 text-[#00E5FF]">💬</div>
            <h3 className="text-2xl font-bold mb-3">Discord Integration</h3>
            <p className="text-gray-300 mb-6">
              Join our active Discord server with dedicated channels for each game, voice chat, and community events.
            </p>
            <button className="px-6 py-3 border-2 border-[#00E5FF] text-[#00E5FF] font-bold uppercase tracking-wider hover:bg-[#00E5FF] hover:text-black transition-all duration-300 rounded-lg">
              Join Discord
            </button>
          </div>
          
          <div className="bg-[#282828] rounded-xl p-8 border border-gray-800 hover:border-[#FF00FF] transition-all duration-300">
            <div className="text-5xl mb-6 text-[#FF00FF]">🎮</div>
            <h3 className="text-2xl font-bold mb-3">Game Rooms</h3>
            <p className="text-gray-300 mb-6">
              Find players for any game at any time with our real-time game room system.
            </p>
            <button className="px-6 py-3 border-2 border-[#FF00FF] text-[#FF00FF] font-bold uppercase tracking-wider hover:bg-[#FF00FF] hover:text-black transition-all duration-300 rounded-lg">
              Browse Rooms
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-[#282828] rounded-xl p-8 border border-gray-800 text-center">
          <h3 className="text-2xl font-bold mb-4">Real-time Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="">
              <div className="text-3xl font-bold text-[#00E5FF]">12,500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-[#00E5FF]">50+</div>
              <div className="text-gray-400">Games Supported</div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-[#00E5FF]">200+</div>
              <div className="text-gray-400">Weekly Matches</div>
            </div>
            <div className="">
              <div className="text-3xl font-bold text-[#00E5FF]">24/7</div>
              <div className="text-gray-400">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;