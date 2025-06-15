
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center glow-green">
              <Zap className="h-5 w-5 text-black" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">The Torch</span>
              <span className="text-sm text-green-400">by Zentoro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#community" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:glow-green transition-all duration-300"
              onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-green-400 hover:bg-green-500/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-500/20 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#home" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#community" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="#about" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-4 border-t border-green-500/20">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold glow-green hover:glow-green-strong transition-all duration-300"
                  onClick={() => {
                    window.open('https://discord.gg/NucXxTb9H3', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
