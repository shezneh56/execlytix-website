import React, { useEffect } from 'react';
import { BarChart3, PieChart, LineChart } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section className="relative overflow-hidden pt-16 pb-0 md:pt-36 md:pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10"></div>
      
      {/* Animated background elements - hidden on small screens for performance */}
      <div className="absolute top-20 right-10 opacity-20 animate-pulse hidden md:block">
        <BarChart3 size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}>
        <PieChart size={100} className="text-secondary" />
      </div>
      <div className="absolute top-40 left-20 opacity-10 animate-pulse hidden md:block" style={{ animationDelay: '2s' }}>
        <LineChart size={80} className="text-primary-light" />
      </div>
      
      <div className="container-custom">
        {/* Hero content - full width on mobile, 80% on larger screens */}
        <div className="w-full md:w-[80%] mx-auto text-center px-4">
          {/* Headline - responsive font sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-12 leading-tight md:leading-none lg:leading-none max-w-[900px] mx-auto">
            Stop Losing $5K+ Monthly to Hidden Revenue Leaks
          </h1>
          
          {/* Subheadline - responsive font sizes */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed w-full mx-auto">
            Get complete visibility into client churn, marketing ROI, and growth opportunities. Make confident decisions that add 10%+ to your revenue - all in one unified dashboard.
          </p>
          
          {/* Social proof callout - responsive font size */}
          <p className="mb-6 md:mb-10 text-primary-light font-medium italic text-base md:text-lg">
            Just like Oscar, who cut churn by 10% in 30 days and added $7K monthly recurring revenue
          </p>
        </div>
      </div>
      
      {/* Calendly Widget - Full width without container and optimized parameters - EXACTLY matching CTA section widget */}
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

export default Hero;
