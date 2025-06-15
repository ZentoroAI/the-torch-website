
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
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 text-sm font-medium mb-4">
            <span>🌟</span>
            <span>Community Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-green-400">Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All channels are managed openly by every founder in the community. 
            It's about loyalty, respect, and real growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-green-500/20 hover:border-green-500/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="text-xs text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded">
                    {feature.channel}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            <strong className="text-green-400">Only serious startup minds invited.</strong> Join a community that values quality over quantity.
          </p>
        </div>
      </div>
    </section>
  );
};
