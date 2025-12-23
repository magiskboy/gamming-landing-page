import React from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    username: "@GamerAlex",
    text: "This club completely changed my gaming experience. I've made so many friends and even won my first tournament!",
    avatar: "/globe.svg",
  },
  {
    name: "Sarah Miller",
    username: "@ProGamerSarah",
    text: "The matchmaking system is incredible. I always find teammates who match my playstyle and skill level.",
    avatar: "/globe.svg",
  },
  {
    name: "Mike Chen",
    username: "@TournamentMike",
    text: "The tournament organization is top-notch. Everything runs smoothly and the prizes are amazing.",
    avatar: "/globe.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT OUR MEMBERS SAY</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of satisfied gamers in our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#282828] rounded-xl p-8 border border-gray-800 hover:border-[#00E5FF] transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.username}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <div className="flex mt-6 text-[#00E5FF]">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00E5FF]">12,500+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00E5FF]">500+</div>
            <div className="text-gray-400">Tournaments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00E5FF]">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;