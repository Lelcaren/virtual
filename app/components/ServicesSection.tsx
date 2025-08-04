
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Executive Assistance',
      description: 'Professional administrative support for executives and leadership teams.',
      icon: 'ri-user-star-line',
      features: ['Calendar Management', 'Email Organization', 'Meeting Coordination']
    },
    {
      title: 'Bookkeeping',
      description: 'Accurate financial record keeping and accounting support services.',
      icon: 'ri-calculator-line',
      features: ['Financial Records', 'Invoice Processing', 'Expense Tracking']
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media planning and content creation services.',
      icon: 'ri-social-media-line',
      features: ['Content Creation', 'Social Posting', 'Analytics Reporting']
    },
    {
      title: 'Meeting Minutes',
      description: 'Professional documentation and transcription of meetings.',
      icon: 'ri-file-text-line',
      features: ['Live Transcription', 'Action Items', 'Professional Format']
    },
    {
      title: 'Travel Arrangements',
      description: 'Comprehensive travel planning and booking coordination.',
      icon: 'ri-plane-line',
      features: ['Flight Booking', 'Hotel Reservations', 'Itinerary Planning']
    },
    {
      title: 'Data Entry',
      description: 'Accurate and efficient data processing and management.',
      icon: 'ri-database-line',
      features: ['Database Management', 'Data Processing', 'Quality Control']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
            Complete Virtual <span className="text-blue-600">Staffing Solutions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            From administrative support to specialized business services, we provide the virtual talent you need to grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors">
                <i className={`${service.icon} text-lg sm:text-xl lg:text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0">
                      <i className="ri-check-line text-blue-600"></i>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/services" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base group-hover:underline"
              >
                Learn More
                <div className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Link 
            href="/services" 
            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg whitespace-nowrap"
          >
            View All Services
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
