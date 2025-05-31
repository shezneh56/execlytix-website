import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // This ensures the Calendly script is loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section bg-dark py-12 md:py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/liam_sheridan/discovery-call" 
            style={{ minWidth: '320px', height: '600px', maxHeight: '90vh' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;
