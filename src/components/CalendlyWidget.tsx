import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
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
    <section className="section bg-dark py-12 md:py-16">
      {/* Full width Calendly widget with optimized parameters */}
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

export default CalendlyWidget;
