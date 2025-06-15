
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 via-background to-green-800/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur border-green-500/20 p-8 md:p-12 text-center">
          <div className="space-y-6">
            <div className="text-4xl mb-4">🔥</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join <span className="text-green-400">The Torch</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with founders, builders, and startup-minded people from around the world. 
              Let's rise together in this free, open community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
              >
                🚀 Join Discord Community
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg rounded-full"
                onClick={() => window.open('https://github.com/ZentoroAI/The-Torch', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                Contribute to Code
              </Button>
            </div>
            
            <div className="pt-6 text-sm text-muted-foreground">
              <p>Join 1,250+ startup founders already building together</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
