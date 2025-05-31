import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Responsive behavior */}
          <a href="#" className="flex items-center mx-auto md:mx-0">
            {/* Desktop and Tablet Logo (>768px) */}
            <img 
              src="/execLytix-full-logo.png" 
              alt="ExecLytix Business Intelligence" 
              className="hidden md:block h-auto w-[220px] lg:w-[250px]"
            />
            
            {/* Mobile Logo (<768px) */}
            <div className="flex items-center md:hidden">
              <img 
                src="/execLytix-icon.png" 
                alt="ExecLytix" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-xl font-heading font-bold">ExecLytix</span>
            </div>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="https://calendly.com/liam_sheridan/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center my-2"
              >
                Get Your Business Health Check
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
