
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, User, Rocket, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ryan',
    role: 'Founder at Zentoro',
    content: 'I thought of starting it because when I am building my startup Zentoro, I felt the need for some free open global community where founders could truly connect and grow together.',
    icon: User,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Ronit',
    role: 'Co-founder at Zentoro',
    content: 'Building Zentoro made me realize how important it is to have a supportive community. The Torch fills that gap perfectly - it\'s where real founders come to share, learn, and collaborate.',
    icon: User,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    name: 'Parv',
    role: 'Core Member at Zentoro',
    content: 'As someone deeply involved in the startup ecosystem, I can say The Torch is unlike any other community. It\'s authentic, supportive, and focused on real growth rather than just networking.',
    icon: Rocket,
    gradient: 'from-orange-500 to-red-500'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 futuristic-grid opacity-20"></div>
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 glass-strong rounded-full px-8 py-4 text-green-400 text-sm font-medium mb-8 border-glow">
            <MessageCircle className="h-4 w-4" />
            <span>From Our Team</span>
          </div>
          <h2 className="font-bold mb-8 bg-gradient-to-r from-foreground via-green-400 to-foreground bg-clip-text text-transparent">
            Why We Built <span className="text-green-500">The Torch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the Zentoro team about the vision behind this community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group glass hover:glass-strong border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover-lift glow-green hover:glow-green-strong rounded-3xl overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="h-12 w-12 text-green-500" />
                </div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 bg-gradient-to-br ${testimonial.gradient} rounded-2xl border border-green-500/20 shadow-lg`}>
                    <testimonial.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-green-400 font-medium">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic text-base relative z-10">
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
