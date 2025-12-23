'use client';

import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is there any cost to join?",
    answer: "No hidden fees – the core membership is 100% free. Premium tournament passes are optional."
  },
  {
    question: "What personal data do you collect?",
    answer: "Only a username, email, and platform preference – stored securely and never sold."
  },
  {
    question: "I'm new – will I fit in?",
    answer: "Absolutely! Our community welcomes beginners and pros alike; we have mentorship channels for every skill level."
  },
  {
    question: "What platforms do you support?",
    answer: "We support PC, PlayStation, Xbox, Nintendo Switch, and mobile gaming platforms."
  },
  {
    question: "How do I join a tournament?",
    answer: "Simply register for free on our platform, browse available tournaments, and sign up for the ones that interest you."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#282828] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00E5FF]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl text-gray-300 mb-10">
            Everything you need to know about our gaming club
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-[#1C1C1E] hover:bg-[#252525] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <span className="text-2xl text-[#00E5FF]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-[#252525]">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;