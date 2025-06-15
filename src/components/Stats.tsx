
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
          animateCount(1250, 'members');
          animateCount(12, 'channels', 1500);
          animateCount(45, 'countries', 1800);
        }
      });
    });

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-card/50 backdrop-blur border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              {counts.members.toLocaleString()}+
            </div>
            <div className="text-muted-foreground font-medium">Active Members</div>
            <div className="text-sm text-muted-foreground/70 mt-1">Growing daily</div>
          </Card>
          
          <Card className="p-6 text-center bg-card/50 backdrop-blur border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              {counts.channels}+
            </div>
            <div className="text-muted-foreground font-medium">Active Channels</div>
            <div className="text-sm text-muted-foreground/70 mt-1">Specialized topics</div>
          </Card>
          
          <Card className="p-6 text-center bg-card/50 backdrop-blur border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              {counts.countries}+
            </div>
            <div className="text-muted-foreground font-medium">Countries</div>
            <div className="text-sm text-muted-foreground/70 mt-1">Global reach</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
