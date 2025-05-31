import React, { useState } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Enhanced Premium Text Logo with increased padding */}
          <a href="#" className="flex items-center mx-auto md:mx-0">
            <BarChart2 className="h-6 w-6 mr-2 text-primary hidden md:block" aria-hidden="true" />
            <span className="text-[30px] md:text-[34px] font-heading font-bold tracking-[0.8px] bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent pb-[0.75rem]">
              ExecLytix
            </span>
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
