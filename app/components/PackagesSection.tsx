
'use client';

import Link from 'next/link';

export default function PackagesSection() {
  const packages = [
    {
      name: 'Starter',
      price: '$15',
      period: '/hour',
      description: 'Perfect for small businesses and entrepreneurs starting with virtual assistance.',
      features: [
        'Basic Administrative Tasks',
        'Email Management',
        'Calendar Scheduling',
        'Data Entry',
        'Customer Support',
        '40 hours/month included'
      ],
      recommended: false,
      buttonText: 'Get Started',
      buttonClass: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Professional',
      price: '$25',
      period: '/hour',
      description: 'Ideal for growing businesses needing comprehensive virtual staffing solutions.',
      features: [
        'All Starter Features',
        'Social Media Management',
        'Bookkeeping Services',
        'Research & Analysis',
        'Content Creation',
        '80 hours/month included',
        'Dedicated Account Manager'
      ],
      recommended: true,
      buttonText: 'Most Popular',
      buttonClass: 'bg-white text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: [
        'All Professional Features',
        'Multiple Virtual Assistants',
        'Custom Integrations',
        'Priority Support',
        'Training & Onboarding',
        'Unlimited hours',
        'Performance Analytics'
      ],
      recommended: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-2 bg-white/20 text-blue-100 rounded-full text-xs sm:text-sm font-medium mb-4">
            PRICING PACKAGES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Choose Your Perfect <span className="text-blue-200">Virtual Staffing</span> Plan
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-3xl mx-auto px-4">
            Flexible pricing options designed to meet businesses of all sizes. Scale up or down as your needs change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-2xl p-6 sm:p-8 relative ${
                pkg.recommended ? 'ring-4 ring-blue-300 lg:transform lg:scale-105' : ''
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-4">{pkg.name}</h3>
                <div className="mb-2 sm:mb-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-600">{pkg.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                    <div className="w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600"></i>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`block text-center px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors whitespace-nowrap ${pkg.buttonClass}`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-xs sm:text-sm lg:text-base text-blue-100 mb-4 sm:mb-6 px-4">
            All packages include free consultation, onboarding support, and 30-day satisfaction guarantee
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-blue-200">
            <div className="flex items-center">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-shield-check-line"></i>
              </div>
              <span>Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-time-line"></i>
              </div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-award-line"></i>
              </div>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
