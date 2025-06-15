
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export const Stats = () => {
  const [counts, setCounts] = useState({ members: 0, channels: 0, countries: 0 });

  useEffect(() => {
    const animateCount = (target: number, key: string, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(50, 'members');
          animateCount(8, 'channels', 1500);
          animateCount(5, 'countries', 1800);
        }
      });
    });

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
            Growing <span className="text-green-500">Together</span>
          </h2>
          <p className="text-lg text-gray-300">A global, open, and free community for startup-minded builders</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center bg-black/80 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 glow-green hover:glow-green-strong">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-3 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              {counts.members}+
            </div>
            <div className="text-white font-semibold text-lg mb-1">Startup-Minded Members</div>
            <div className="text-sm text-gray-400">Global community</div>
          </Card>
          
          <Card className="p-8 text-center bg-black/80 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 glow-green hover:glow-green-strong">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-3 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              {counts.channels}+
            </div>
            <div className="text-white font-semibold text-lg mb-1">Open Channels</div>
            <div className="text-sm text-gray-400">Free discussions</div>
          </Card>
          
          <Card className="p-8 text-center bg-black/80 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 glow-green hover:glow-green-strong">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-3 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              {counts.countries}+
            </div>
            <div className="text-white font-semibold text-lg mb-1">Countries</div>
            <div className="text-sm text-gray-400">Global reach</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
