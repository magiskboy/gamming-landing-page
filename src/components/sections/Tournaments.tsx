import React from 'react';

const tournaments = [
  {
    title: "PC Masters Championship",
    date: "Dec 28, 2023",
    game: "Counter-Strike 2",
    prize: "$5,000",
  },
  {
    title: "Mobile Legends Showdown",
    date: "Jan 5, 2024",
    game: "Mobile Legends",
    prize: "$3,000",
  },
  {
    title: "FIFA 24 Global Cup",
    date: "Jan 12, 2024",
    game: "FIFA 24",
    prize: "$2,500",
  },
  {
    title: "Apex Legends Clash",
    date: "Jan 19, 2024",
    game: "Apex Legends",
    prize: "$4,000",
  },
];

const Tournaments = () => {
  return (
    <section className="py-16 md:py-24 bg-[#282828] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF00FF]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">UPCOMING TOURNAMENTS</h2>
          <p className="text-xl text-gray-300 mb-10">
            Compete for glory and prizes in our exclusive events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className="bg-[#1C1C1E] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF00FF] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-bold bg-[#FF00FF] text-white px-3 py-1 rounded-full">
                    {tournament.game}
                  </span>
                  <span className="text-sm font-bold text-[#00FF99]">
                    {tournament.prize}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{tournament.title}</h3>
                <div className="flex items-center text-gray-400 mb-6">
                  <span className="mr-2">📅</span>
                  <span>{tournament.date}</span>
                </div>
                <button className="w-full py-3 bg-[#FF00FF] text-white font-bold uppercase tracking-wider hover:bg-[#e600e6] transition-all duration-300 rounded-lg">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-[#FF00FF] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#FF00FF] transition-all duration-300 rounded-lg">
            View All Tournaments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;