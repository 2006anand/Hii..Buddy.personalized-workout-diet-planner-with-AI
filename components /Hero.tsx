
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 text-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-none mb-4 animate-in">
          HII <span className="text-indigo-500">BUDDY</span>
        </h1>
        
        <div className="flex flex-col items-center mt-4 gap-4 animate-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-zinc-500 uppercase">
            Your Personal Fitness Engineering Partner
          </p>
          
          <div className="h-px w-12 bg-indigo-500/30"></div>
          
          <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-3">
            ARCHITECTURE BY <span className="text-white">ANAND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
