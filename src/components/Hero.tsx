
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-background to-emerald-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <span>🔥</span>
            <span>Free & Open Global Community</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/935aa5de-a24f-4645-a988-5f156502dd1e.png" 
                alt="The Torch by Zentoro" 
                className="h-32 md:h-40 w-auto"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent leading-tight">
              Join The Movement
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A global Discord community for founders, builders, and startup-minded people. 
            Build in public, collaborate, and grow together in our free, open ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
              onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
            >
              🚀 Join Discord Community
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400/50 px-10 py-4 text-lg rounded-xl backdrop-blur-sm"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Live Discord Community</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Global Network</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
