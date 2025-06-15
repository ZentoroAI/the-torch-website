
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-950/20 via-background to-emerald-900/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-background/80 backdrop-blur-sm border-emerald-500/20 p-12 md:p-16 text-center shadow-2xl">
          <div className="space-y-8">
            <div className="text-6xl mb-6">🔥</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join <span className="text-emerald-500">The Torch</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect with founders, builders, and startup-minded people from around the world. 
              Let's rise together in this free, open community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
                onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
              >
                🚀 Join Discord Community
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400/50 px-10 py-4 text-xl rounded-xl backdrop-blur-sm"
                onClick={() => window.open('https://github.com/ZentoroAI/The-Torch', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute to Code
              </Button>
            </div>
            
            <div className="pt-8 text-base text-muted-foreground">
              <p>Join 1,250+ startup founders already building together</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
