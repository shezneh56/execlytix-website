import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section bg-dark" id="contact">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See What's <span className="gradient-text">Really Happening</span> in Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a 15-minute call to discover which numbers you should actually be tracking (and which ones are just noise)
          </p>
          <a 
            href="https://calendly.com/liam_sheridan/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book Your Discovery Call
          </a>
        </div>

        <div className="bg-dark-card rounded-xl p-8 border border-gray-800 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-primary mr-2" />
                Schedule Your Call
              </h3>
              
              <p className="text-gray-300 mb-6">
                In this free 15-minute call, we'll discuss:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 flex-shrink-0">1</span>
                  <span>Your current data challenges and frustrations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 flex-shrink-0">2</span>
                  <span>Which metrics actually matter for your specific business</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-3 flex-shrink-0">3</span>
                  <span>How we can help you gain complete visibility</span>
                </li>
              </ul>
              
              <p className="text-gray-400 text-sm">
                No pressure, no sales tactics. Just a conversation about your business and how better data visibility could help you grow.
              </p>
            </div>
            
            {/* Calendly placeholder */}
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-white" style={{ height: "630px" }}>
              <div className="flex items-center justify-center h-full flex-col p-6 bg-gray-100">
                <Calendar className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-gray-800 text-xl font-bold mb-2">Calendly Embed Placeholder</h4>
                <p className="text-gray-600 text-center mb-4">Your Calendly scheduling widget will appear here</p>
                <div className="text-sm text-gray-500 text-center">
                  <p>Replace this div with your Calendly embed code</p>
                  <p className="mt-2">Recommended size: 100% width × 630px height</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
