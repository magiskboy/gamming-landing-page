import React from 'react';

const benefits = [
  {
    title: "Instant Team-Up",
    description: "Find teammates in seconds with our smart matchmaking.",
    icon: "🎮",
  },
  {
    title: "Exclusive Tournaments",
    description: "Compete in prize-filled events across every platform.",
    icon: "🏆",
  },
  {
    title: "Voice & Chat",
    description: "Integrated Discord voice rooms & in-app chat.",
    icon: "💬",
  },
  {
    title: "Skill-Boost",
    description: "Guides, coaching streams, and leaderboards to level-up.",
    icon: "📈",
  },
  {
    title: "Rewards & Recognition",
    description: "Badges, merch, and spotlight features.",
    icon: "⭐",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-[#282828] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E5FF]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHY JOIN OUR GAMING CLUB?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for the ultimate gaming experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#1C1C1E] rounded-xl p-8 border border-gray-800 hover:border-[#00E5FF] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[#00E5FF]">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#00E5FF] text-black font-bold text-lg uppercase tracking-wider hover:bg-[#00d0e6] transition-all duration-300 transform hover:scale-105 rounded-lg">
            Find My Squad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;