
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, User, Rocket } from 'lucide-react';

const testimonials = [
  {
    name: 'Ryan',
    role: 'Founder at Zentoro',
    content: 'I thought of starting it because when I am building my startup Zentoro, I felt the need for some free open global community where founders could truly connect and grow together.',
    icon: User
  },
  {
    name: 'Ronit',
    role: 'Co-founder at Zentoro',
    content: 'Building Zentoro made me realize how important it is to have a supportive community. The Torch fills that gap perfectly - it\'s where real founders come to share, learn, and collaborate.',
    icon: User
  },
  {
    name: 'Parv',
    role: 'Core Member at Zentoro',
    content: 'As someone deeply involved in the startup ecosystem, I can say The Torch is unlike any other community. It\'s authentic, supportive, and focused on real growth rather than just networking.',
    icon: Rocket
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4" />
            <span>From Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why We Built <span className="text-emerald-500">The Torch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the Zentoro team about the vision behind this community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-background/80 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-2 bg-emerald-500/10 rounded-full">
                    <testimonial.icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-emerald-500 font-medium">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic text-base">
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
