
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Link, ArrowUp, Lightbulb, Target } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Build in Public',
    description: 'Share your journey, get feedback, and learn from other founders building their startups openly.',
    channel: '#build-in-public'
  },
  {
    icon: MessageSquare,
    title: 'Ask The Torch',
    description: 'Get expert advice from experienced founders and the community on any startup challenges.',
    channel: '#ask-the-torch'
  },
  {
    icon: Users,
    title: 'Co-founder Hiring',
    description: 'Find your perfect co-founder or join an exciting startup as a founding team member.',
    channel: '#cofounder-hirings'
  },
  {
    icon: Link,
    title: 'Tools & Resources',
    description: 'Discover the best tools, resources, and frameworks to accelerate your startup growth.',
    channel: '#tools-resources'
  },
  {
    icon: ArrowUp,
    title: 'Funding Insights',
    description: 'Learn about funding opportunities, investor connections, and fundraising strategies.',
    channel: '#funding-insights'
  },
  {
    icon: Target,
    title: 'Product Feedback',
    description: 'Get valuable feedback on your products from real users and fellow entrepreneurs.',
    channel: '#product-feedback'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden futuristic-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm border-glow">
            <Target className="h-4 w-4" />
            <span>Community Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
            Everything You Need to <span className="text-green-500">Grow</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All channels are managed openly by every founder in the community. 
            It's about loyalty, respect, and real growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-black/80 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 overflow-hidden glow-green hover:glow-green-strong"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors border border-green-500/20 glow-green">
                    <feature.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-xs text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30 border-glow">
                    {feature.channel}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/5 border border-green-500/30 rounded-xl px-6 py-4 border-glow">
            <span className="text-green-500 font-semibold">Only serious startup minds invited.</span>
            <span className="text-gray-300">Join a community that values quality over quantity.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
