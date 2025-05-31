import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "10x Community Growth Visibility",
      client: "Membership Community",
      description: "We consolidated member engagement data across Discord, Circle, and course platform to identify retention risks.",
      metrics: [
        { icon: <Users className="h-5 w-5 text-primary" />, text: "95% member retention" },
        { icon: <TrendingUp className="h-5 w-5 text-secondary" />, text: "40% engagement increase" }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ad Spend Optimization Dashboard",
      client: "Course Creator",
      description: "We built a unified dashboard connecting ad platforms with sales data to optimize marketing ROI.",
      metrics: [
        { icon: <DollarSign className="h-5 w-5 text-primary" />, text: "32% reduced CAC" },
        { icon: <TrendingUp className="h-5 w-5 text-secondary" />, text: "2.8x ROAS improvement" }
      ],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Business Health Monitor",
      client: "Executive Coach",
      description: "We created a comprehensive business health dashboard tracking client progress, revenue, and team performance.",
      metrics: [
        { icon: <Users className="h-5 w-5 text-primary" />, text: "15% client results improvement" },
        { icon: <DollarSign className="h-5 w-5 text-secondary" />, text: "28% revenue growth" }
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section bg-dark" id="case-studies">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We've Helped Community Businesses <span className="gradient-text">Uncover Hidden Revenue</span>
          </h2>
          <p className="text-xl text-gray-300">
            See how coaching businesses like yours have gained complete visibility and improved decision-making with our custom dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card group hover:shadow-glow transition-all duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium bg-primary/90 text-white px-3 py-1 rounded-full">
                    {study.client}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-gray-400 mb-4">{study.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center bg-dark-light px-3 py-1.5 rounded-full">
                    {metric.icon}
                    <span className="text-sm ml-2">{metric.text}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://calendly.com/liam_sheridan/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
              >
                <span className="mr-2">See how we can help you</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
