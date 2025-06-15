
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center glow-green shadow-lg">
              <Zap className="h-6 w-6 text-black" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-foreground tracking-tight">The Torch</span>
              <span className="text-sm text-green-400 font-medium px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">by Zentoro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group py-2">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#features" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group py-2">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#community" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group py-2">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#about" className="text-foreground hover:text-green-400 transition-all duration-300 font-medium relative group py-2">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="glass border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:glow-green transition-all duration-300 rounded-xl px-6 py-2"
              onClick={() => window.open('https://discord.gg/NucXxTb9H3', '_blank')}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-green-400 hover:bg-green-500/10 rounded-xl"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-500/20 glass-strong">
            <div className="px-4 py-8 space-y-6">
              <a 
                href="#home" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#community" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="#about" 
                className="block text-foreground hover:text-green-400 transition-colors font-medium py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-6 border-t border-green-500/20">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold glow-green hover:glow-green-strong transition-all duration-300 rounded-xl py-3"
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
