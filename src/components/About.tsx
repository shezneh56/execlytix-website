import React from 'react';
import { Award, BarChart3, FileSpreadsheet, Users, DollarSign } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section bg-dark-lighter" id="about">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Numbers. <span className="gradient-text">Finally Clear.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Intelligence Specialist" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            
            {/* Floating badges */}
            <div className="absolute top-6 -right-6 bg-dark-card p-3 rounded-lg shadow-lg border border-gray-800">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-dark-card p-3 rounded-lg shadow-lg border border-gray-800">
              <FileSpreadsheet className="h-6 w-6 text-secondary" />
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Qualified Accountant</h3>
                  <p className="text-gray-400">
                    With professional accounting credentials and business intelligence expertise, we bring financial rigor to your data analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Business Specialist</h3>
                  <p className="text-gray-400">
                    We exclusively serve coaching and community businesses, giving us deep insight into the metrics that matter most for your growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileSpreadsheet className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Familiar Tools, No Learning Curve</h3>
                  <p className="text-gray-400">
                    We leverage familiar tools like Google Sheets, eliminating steep learning curves while delivering powerful automation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">50% Less Cost</h3>
                  <p className="text-gray-400">
                    Get enterprise-level business intelligence at half the cost of traditional BI consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
