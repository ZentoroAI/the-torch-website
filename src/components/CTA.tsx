
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Zap, Rocket } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-6xl mx-auto glass-strong border-green-500/30 p-16 md:p-20 text-center glow-green-strong rounded-3xl">
          <div className="space-y-12">
            <div className="relative">
              <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl w-fit mx-auto border border-green-500/20 glow-green-strong shadow-2xl">
                <Rocket className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-150"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-bold bg-gradient-to-r from-foreground via-green-400 to-foreground bg-clip-text text-transparent">
                Ready to Join <span className="text-green-500">The Torch</span>?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Connect with founders, builders, and startup-minded people from around the world. 
              Let's rise together in this free, open community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black px-12 py-6 text-xl font-semibold rounded-2xl glow-green-strong hover:glow-green-strong transition-all duration-500 hover:scale-110 border-0 shadow-2xl"
                onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
              >
                <Zap className="mr-3 h-6 w-6" />
                Join Discord Community
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-12 py-6 text-xl rounded-2xl border-glow hover:glow-green transition-all duration-500 hover:scale-105"
                onClick={() => window.open('https://github.com/ZentoroAI/the-torch-website', '_blank')}
              >
                <Github className="mr-3 h-6 w-6" />
                Contribute to Code
              </Button>
            </div>
            
            <div className="pt-12 glass rounded-2xl p-8 border border-green-500/20 max-w-md mx-auto">
              <p className="text-lg text-muted-foreground font-medium">
                Join 100+ startup founders already building together
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
