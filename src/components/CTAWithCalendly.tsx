import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const CTAWithCalendly: React.FC = () => {
  useEffect(() => {
    // This ensures the Calendly script is loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up - safely remove the script if it exists
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('calendly')) {
          try {
            // Only remove if it's a child of document.body
            if (scripts[i].parentNode === document.body) {
              document.body.removeChild(scripts[i]);
            }
          } catch (error) {
            console.warn('Error removing Calendly script:', error);
          }
          break;
        }
      }
    };
  }, []);

  return (
    <section className="section bg-dark pt-16 pb-0 md:pt-24 md:pb-0">
      {/* CTA Content - Keep this in a container */}
      <div className="container-custom">
        <div className="w-full md:w-[80%] mx-auto text-center px-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-12 leading-tight md:leading-none lg:leading-none max-w-[900px] mx-auto">
            Ready to Stop Losing Revenue to Blind Spots?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed w-full mx-auto">
            Book a 15-minute call to see exactly which bottlenecks are costing your business money
          </p>
          
          <a 
            href="https://calendly.com/liam_sheridan/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block mb-6 md:mb-8"
          >
            Get Your Business Health Check
          </a>
          
          {/* Risk reversal copy */}
          <div className="text-gray-400 text-sm md:text-base mb-8 flex flex-col items-center justify-center space-y-1 md:space-y-2">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
              <span>No-obligation 15-minute call</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
              <span>Get actionable insights even if we don't work together</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
              <span>100% confidential - your data stays private</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendly Widget - Full width without container and optimized parameters */}
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/liam_sheridan/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1" 
        style={{ 
          minWidth: '320px', 
          height: 'auto',
          minHeight: '750px',
          border: 'none',
          overflow: 'visible'
        }}
      ></div>
    </section>
  );
};

export default CTAWithCalendly;
