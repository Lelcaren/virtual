
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Started', href: '/get-started' }
  ];

  const services = [
    'Executive Assistance',
    'Bookkeeping',
    'Social Media Management',
    'Meeting Minutes',
    'Travel Arrangements',
    'Data Entry'
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <img 
                src="https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/eeec49af0a1a72b38a483e8b29cf985c.png" 
                alt="Virtual Staffing Solutions" 
                className="h-24 sm:h-30 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Partnering with Belyotte Global Opportunities to deliver exceptional virtual staffing solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="ri-linkedin-fill text-sm sm:text-base text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="ri-twitter-fill text-sm sm:text-base text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill text-sm sm:text-base text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <i className="ri-phone-line text-blue-600"></i>
                </div>
                <div>
                  <p className="text-gray-600 text-sm sm:text-base">757-296-8897</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <i className="ri-mail-line text-blue-600"></i>
                </div>
                <div>
                  <p className="text-gray-600 text-sm sm:text-base break-all">
                    info@thevirtualstaffingsolution.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <i className="ri-time-line text-blue-600"></i>
                </div>
                <div>
                  <p className="text-gray-600 text-sm sm:text-base">24/7 Global Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              {currentYear} Virtual Staffing Solutions. A collaborative partner of Belyotte Global Opportunities. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
