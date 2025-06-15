
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, MessageCircle, Globe, Mail, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center glow-green">
                <Zap className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">The Torch</div>
                <div className="text-sm text-green-400">by Zentoro</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A free, open global community for startup-minded people building the future together.
            </p>
          </div>

          {/* Community Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Community</h3>
            <div className="space-y-2">
              <a 
                href="https://discord.gg/NucXxTb9H3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-green-400 transition-colors group"
              >
                <MessageCircle className="h-4 w-4 group-hover:text-green-400" />
                <span>Discord</span>
              </a>
              <a 
                href="https://github.com/ZentoroAI/The-Torch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Github className="h-4 w-4 group-hover:text-green-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.garudexlabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Globe className="h-4 w-4 group-hover:text-green-400" />
                <span>Zentoro</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <div className="space-y-2">
              <a 
                href="#features" 
                className="block text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Features
              </a>
              <a 
                href="#community" 
                className="block text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Community Stats
              </a>
              <a 
                href="#about" 
                className="block text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:contact@zentoro.com" 
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-green-400" />
                <span>Contact Us</span>
              </a>
              <p className="text-sm text-gray-400">
                Join our growing community of startup builders from around the world.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-green-500/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 The Torch by Zentoro. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <span className="text-green-400">⚡</span>
              <span>for the startup community</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
