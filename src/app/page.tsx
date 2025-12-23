import React from 'react';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Community from '@/components/sections/Community';
import Tournaments from '@/components/sections/Tournaments';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Community />
      <Tournaments />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}
