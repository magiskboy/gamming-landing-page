import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00E5FF] rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF00FF] rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-[#282828] rounded-2xl p-12 border border-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO PLAY?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our community today and start your journey to becoming a better gamer
          </p>
          
          <div className="max-w-md mx-auto bg-[#1C1C1E] rounded-xl p-8 border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Create Your Free Account</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your gamer tag (e.g., xX-Shadow-Xx)" 
                  className="w-full px-4 py-3 bg-[#282828] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00E5FF] text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="you@email.com" 
                  className="w-full px-4 py-3 bg-[#282828] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00E5FF] text-white placeholder-gray-500"
                />
              </div>
              <div>
                <select 
                  className="w-full px-4 py-3 bg-[#282828] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00E5FF] text-white"
                >
                  <option value="" disabled selected>Preferred Platform</option>
                  <option value="pc">PC</option>
                  <option value="playstation">PlayStation</option>
                  <option value="xbox">Xbox</option>
                  <option value="nintendo">Nintendo Switch</option>
                  <option value="mobile">Mobile</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#00E5FF] text-black font-bold text-lg uppercase tracking-wider hover:bg-[#00d0e6] transition-all duration-300 rounded-lg mt-4"
              >
                Create My Profile
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4 text-center">
              No credit card required. By signing up you agree to our Terms & Privacy Policy.
            </p>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Already have an account? <a href="#" className="text-[#00E5FF] hover:underline">Sign in here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;