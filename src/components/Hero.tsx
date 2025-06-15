
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Globe, DollarSign, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 futuristic-grid opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <br/>
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-up">
          <div className="inline-flex items-center space-x-3 glass-strong rounded-full px-8 py-4 text-green-400 text-sm font-medium border-glow animate-float">
            <Sparkles className="h-4 w-4" />
            <span>Free & Open Global Community</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-8">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <img 
                  src="/lovable-uploads/935aa5de-a24f-4645-a988-5f156502dd1e.png" 
                  alt="The Torch by Zentoro" 
                  className="h-36 md:h-48 w-auto filter drop-shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-float"
                />
                <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-150"></div>
              </div>
            </div>
            
            <h1 className="font-bold bg-gradient-to-r from-foreground via-green-400 to-foreground bg-clip-text text-transparent leading-[0.9]">
              Join The Movement
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            A global Discord community for founders, builders, and startup-minded people. 
            Build in public, collaborate, and grow together in our free, open ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black px-12 py-6 text-lg font-semibold rounded-2xl glow-green hover:glow-green-strong transition-all duration-500 hover:scale-105 border-0 shadow-2xl"
              onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
            >
              <Zap className="mr-3 h-5 w-5" />
              Join Discord Community
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-12 py-6 text-lg rounded-2xl border-glow hover:glow-green transition-all duration-500 hover:scale-105"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-3 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-6 rounded-2xl glass border-glow hover-lift">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse glow-green"></div>
              <span className="text-muted-foreground font-medium">Live Discord Community</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 rounded-2xl glass border-glow hover-lift">
              <Globe className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground font-medium">Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 rounded-2xl glass border-glow hover-lift">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground font-medium">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
