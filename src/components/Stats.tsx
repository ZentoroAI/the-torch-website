
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
          animateCount(100, 'members');
          animateCount(8, 'channels', 1500);
          animateCount(15, 'countries', 1800);
        }
      });
    });

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Growing <span className="text-emerald-500">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">A global, open, and free community for startup-minded builders</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center bg-background/80 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-3">
              {counts.members}+
            </div>
            <div className="text-foreground font-semibold text-lg mb-1">Startup-Minded Members</div>
            <div className="text-sm text-muted-foreground">Global community</div>
          </Card>
          
          <Card className="p-8 text-center bg-background/80 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-3">
              {counts.channels}+
            </div>
            <div className="text-foreground font-semibold text-lg mb-1">Open Channels</div>
            <div className="text-sm text-muted-foreground">Free discussions</div>
          </Card>
          
          <Card className="p-8 text-center bg-background/80 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-3">
              {counts.countries}+
            </div>
            <div className="text-foreground font-semibold text-lg mb-1">Countries</div>
            <div className="text-sm text-muted-foreground">Global reach</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
