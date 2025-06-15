
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🔥</span>
            <span className="text-lg font-semibold">The Torch</span>
            <span className="text-muted-foreground">by Zentoro</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            A free, open global community for startup-minded people
          </p>
          
          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground">
              Managed by{' '}
              <a 
                href="https://www.garudexlabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Zentoro
              </a>
              {' '}• Built with ❤️ for the startup community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
