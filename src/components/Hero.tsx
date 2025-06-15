
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Globe, DollarSign } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden futuristic-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 text-green-400 text-sm font-medium backdrop-blur-sm border-glow">
            <Zap className="h-4 w-4" />
            <span>Free & Open Global Community</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/935aa5de-a24f-4645-a988-5f156502dd1e.png" 
                alt="The Torch by Zentoro" 
                className="h-32 md:h-40 w-auto filter drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent leading-tight">
              Join The Movement
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A global Discord community for founders, builders, and startup-minded people. 
            Build in public, collaborate, and grow together in our free, open ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 text-lg font-semibold rounded-xl glow-green hover:glow-green-strong transition-all duration-300 hover:scale-105 border-0"
              onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
            >
              <Zap className="mr-2 h-5 w-5" />
              Join Discord Community
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-10 py-4 text-lg rounded-xl backdrop-blur-sm border-glow hover:glow-green transition-all duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20 border-glow">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse glow-green"></div>
              <span className="text-gray-300">Live Discord Community</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20 border-glow">
              <Globe className="h-4 w-4 text-green-500" />
              <span className="text-gray-300">Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20 border-glow">
              <DollarSign className="h-4 w-4 text-green-500" />
              <span className="text-gray-300">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
