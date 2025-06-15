
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Github, BookOpen, CircleUser, Link, ArrowUp } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
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
    icon: CircleUser,
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
    icon: MessageSquare,
    title: 'Product Feedback',
    description: 'Get valuable feedback on your products from real users and fellow entrepreneurs.',
    channel: '#product-feedback'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span>🌟</span>
            <span>Community Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-emerald-500">Grow</span>
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
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {feature.channel}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-400 transition-colors">
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
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-6 py-4">
            <span className="text-emerald-500 font-semibold">Only serious startup minds invited.</span>
            <span className="text-muted-foreground">Join a community that values quality over quantity.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
