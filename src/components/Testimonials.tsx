
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Ryan',
    role: 'Founder at Zentoro',
    content: 'I thought of starting it because when I am building my startup Zentoro, I felt the need for some free open global community where founders could truly connect and grow together.',
    avatar: '👨‍💼'
  },
  {
    name: 'Ronit',
    role: 'Co-founder at Zentoro',
    content: 'Building Zentoro made me realize how important it is to have a supportive community. The Torch fills that gap perfectly - it\'s where real founders come to share, learn, and collaborate.',
    avatar: '👨‍💻'
  },
  {
    name: 'Parv',
    role: 'Core Member at Zentoro',
    content: 'As someone deeply involved in the startup ecosystem, I can say The Torch is unlike any other community. It\'s authentic, supportive, and focused on real growth rather than just networking.',
    avatar: '🚀'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 text-sm font-medium mb-4">
            <span>💬</span>
            <span>From Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We Built <span className="text-green-400">The Torch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the Zentoro team about the vision behind this community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card/50 backdrop-blur border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-green-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
