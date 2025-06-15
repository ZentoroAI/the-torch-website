
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Zap } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto bg-black/80 backdrop-blur-sm border-green-500/30 p-12 md:p-16 text-center glow-green">
          <div className="space-y-8">
            <div className="p-4 bg-green-500/10 rounded-full w-fit mx-auto border border-green-500/20 glow-green">
              <Zap className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
              Ready to Join <span className="text-green-500">The Torch</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect with founders, builders, and startup-minded people from around the world. 
              Let's rise together in this free, open community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 text-xl font-semibold rounded-xl glow-green hover:glow-green-strong transition-all duration-300 hover:scale-105 border-0"
                onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
              >
                <Zap className="mr-2 h-5 w-5" />
                Join Discord Community
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-10 py-4 text-xl rounded-xl backdrop-blur-sm border-glow hover:glow-green transition-all duration-300"
                onClick={() => window.open('https://github.com/ZentoroAI/The-Torch', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute to Code
              </Button>
            </div>
            
            <div className="pt-8 text-base text-gray-400">
              <p>Join 100+ startup founders already building together</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
