import React from 'react';
import { BarChart3, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-lg font-heading font-bold">ExecLytix</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:liam@execlytix.com" className="text-gray-300 hover:text-primary transition-colors">
              liam@execlytix.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ExecLytix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://calendly.com/liam_sheridan/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-sm"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
