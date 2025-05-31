import React from 'react';
import { AlertTriangle, CheckCircle, Clock, DollarSign, Users, Target, BarChart } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const painPoints = [
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      title: "You Don't Know Which Marketing Actually Brings in Profitable Clients",
      description: "You can't tell which ads actually bring in paying clients",
      costImplication: "Missing out on $2-5K monthly by doubling down on wrong channels"
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Your Best Clients Are Leaving Without You Knowing Why",
      description: "Your highest-value clients are canceling and you had no warning signs",
      costImplication: "Each lost $500/month client = $6K annual revenue gone forever"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-yellow-500" />,
      title: "You're Missing Revenue Opportunities Right Under Your Nose",
      description: "Growth opportunities are hiding in your data but you can't see them",
      costImplication: "Growth opportunities hiding in your data cost $3-8K monthly"
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Wasting Hours Every Week Checking Multiple Dashboards for Basic Answers",
      description: "You spend your mornings jumping between 5+ different systems",
      costImplication: "$1,200+ monthly in lost productive time (5+ hours weekly)"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-500" />,
      title: "Making Important Business Decisions Without the Full Picture",
      description: "Your team argues about which metrics to trust instead of focusing on growth",
      costImplication: "Poor decisions cost 10-15% annual growth potential"
    }
  ];

  const solutions = [
    {
      text: "See exactly which marketing channels bring paying clients → Cut ad waste by 30%+"
    },
    {
      text: "Identify your most and least profitable client segments → Focus on high-value prospects"
    },
    {
      text: "Spot churn risks before clients cancel → Save 10%+ monthly revenue"
    },
    {
      text: "One dashboard with all your critical numbers"
    },
    {
      text: "Make confident decisions based on real data"
    }
  ];

  return (
    <section className="section bg-dark" id="problem-solution">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            You're Leaving Money on the Table <span className="text-red-500">Every Single Day</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Without clear visibility into your numbers, you're missing opportunities and wasting resources on what's not working.
          </p>
        </div>

        {/* Stack vertically on mobile, side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          {/* Problem Side */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
              <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-red-500 mr-2" />
              Common Problems You're Facing
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start p-3 md:p-4 rounded-lg bg-dark-card border border-gray-800">
                  <div className="flex-shrink-0 mr-3 md:mr-4">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-base">{point.title}</h4>
                    <p className="text-sm text-gray-400 mb-1 md:mb-2">{point.description}</p>
                    <p className="text-sm text-red-500 italic font-medium">{point.costImplication}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="bg-dark-card rounded-xl p-4 md:p-6 border border-primary/20 relative overflow-hidden mt-6 md:mt-0">
            {/* Decorative gradient - hidden on small screens for performance */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl hidden md:block"></div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-secondary mr-2" />
              The ExecLytix Solution
            </h3>

            <div className="relative z-10">
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-base">{solution.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
