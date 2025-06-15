
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Link, ArrowUp, Lightbulb, Target } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Build in Public',
    description: 'Share your journey, get feedback, and learn from other founders building their startups openly.',
    channel: '#build-in-public',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: MessageSquare,
    title: 'Ask The Torch',
    description: 'Get expert advice from experienced founders and the community on any startup challenges.',
    channel: '#ask-the-torch',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Co-founder Hiring',
    description: 'Find your perfect co-founder or join an exciting startup as a founding team member.',
    channel: '#cofounder-hirings',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: Link,
    title: 'Tools & Resources',
    description: 'Discover the best tools, resources, and frameworks to accelerate your startup growth.',
    channel: '#tools-resources',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: ArrowUp,
    title: 'Funding Insights',
    description: 'Learn about funding opportunities, investor connections, and fundraising strategies.',
    channel: '#funding-insights',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Target,
    title: 'Product Feedback',
    description: 'Get valuable feedback on your products from real users and fellow entrepreneurs.',
    channel: '#product-feedback',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 futuristic-grid opacity-30"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 glass-strong rounded-full px-8 py-4 text-green-400 text-sm font-medium mb-8 border-glow">
            <Target className="h-4 w-4" />
            <span>Community Features</span>
          </div>
          <h2 className="font-bold mb-8 bg-gradient-to-r from-foreground via-green-400 to-foreground bg-clip-text text-transparent">
            Everything You Need to <span className="text-green-500">Grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All channels are managed openly by every founder in the community. 
            It's about loyalty, respect, and real growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-2xl transition-all duration-500 hover-lift glass hover:glass-strong border-green-500/20 hover:border-green-500/40 overflow-hidden glow-green hover:glow-green-strong rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs text-green-400 font-mono glass px-4 py-2 rounded-full border border-green-500/30">
                    {feature.channel}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-green-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 glass-strong border border-green-500/30 rounded-2xl px-8 py-6 border-glow max-w-2xl">
            <span className="text-green-500 font-semibold text-lg">Only serious startup minds invited.</span>
            <span className="text-muted-foreground">Join a community that values quality over quantity.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
