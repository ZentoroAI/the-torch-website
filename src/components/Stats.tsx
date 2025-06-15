
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, MessageSquare, Bot } from 'lucide-react';

export const Stats = () => {
  const [counts, setCounts] = useState({ members: 0, channels: 0, countries: 0, bots: 0 });

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
          animateCount(7, 'bots', 2200);
        }
      });
    });

    const element = document.getElementById('stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${counts.members}+`,
      label: 'Startup-Minded Members',
      subtitle: 'Global community',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      value: `${counts.channels}+`,
      label: 'Open Channels',
      subtitle: 'Free discussions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      value: `${counts.countries}+`,
      label: 'Countries',
      subtitle: 'Global reach',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bot,
      value: `${counts.bots}`,
      label: 'Community Bots',
      subtitle: 'Automated support',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="stats" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-6 bg-gradient-to-r from-foreground via-green-400 to-foreground bg-clip-text text-transparent">
            Growing <span className="text-green-500">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A global, open, and free community for startup-minded builders</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="group p-8 text-center glass hover:glass-strong transition-all duration-500 hover-lift glow-green hover:glow-green-strong rounded-3xl border-green-500/20 hover:border-green-500/40">
              <div className="space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl md:text-5xl font-bold text-green-500 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-lg">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
