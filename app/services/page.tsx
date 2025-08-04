
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Executive Assistance',
      description: 'Professional administrative support for executives and leadership teams, including email management, scheduling, and strategic planning assistance.',
      features: ['Calendar Management', 'Email Organization', 'Meeting Coordination', 'Travel Planning', 'Document Preparation'],
      icon: 'ri-user-star-line',
      color: 'bg-[#1e3a5f]',
    },
    {
      title: 'Bookkeeping',
      description: 'Accurate financial record keeping and accounting support services to maintain your business financial health.',
      features: ['Financial Records', 'Invoice Processing', 'Expense Tracking', 'Tax Preparation', 'Financial Reports'],
      icon: 'ri-calculator-line',
      color: 'bg-[#4a90c2]',
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media planning, content creation, and community management to grow your online presence.',
      features: ['Content Creation', 'Social Posting', 'Community Engagement', 'Analytics Reporting', 'Brand Management'],
      icon: 'ri-social-media-line',
      color: 'bg-[#20b2aa]',
    },
    {
      title: 'Meeting Minutes',
      description: 'Professional documentation and transcription of important meetings to ensure nothing is missed.',
      features: ['Live Transcription', 'Action Item Tracking', 'Professional Formatting', 'Quick Turnaround', 'Secure Storage'],
      icon: 'ri-file-text-line',
      color: 'bg-[#87ceeb] text-[#1e3a5f]',
    },
    {
      title: 'Travel Arrangements',
      description: 'Comprehensive travel planning and booking coordination services for business and personal travel.',
      features: ['Flight Booking', 'Hotel Reservations', 'Car Rentals', 'Itinerary Planning', '24/7 Support'],
      icon: 'ri-plane-line',
      color: 'bg-[#1e3a5f]',
    },
    {
      title: 'Calendar Management',
      description: 'Efficient scheduling and calendar coordination for busy professionals to optimize productivity.',
      features: ['Appointment Scheduling', 'Meeting Coordination', 'Reminder Systems', 'Time Blocking', 'Priority Management'],
      icon: 'ri-calendar-line',
      color: 'bg-[#4a90c2]',
    },
    {
      title: 'Data Entry',
      description: 'Accurate and efficient data processing and database management to keep your information organized.',
      features: ['Database Management', 'Data Processing', 'Quality Control', 'Format Conversion', 'Regular Backups'],
      icon: 'ri-database-line',
      color: 'bg-[#20b2aa]',
    },
    {
      title: 'Research Services',
      description: 'Comprehensive market research and business intelligence gathering to support informed decision-making.',
      features: ['Market Analysis', 'Competitor Research', 'Industry Reports', 'Data Collection', 'Trend Analysis'],
      icon: 'ri-search-line',
      color: 'bg-[#87ceeb] text-[#1e3a5f]',
    },
    {
      title: 'Customer Support',
      description: 'Professional customer service and support solutions to enhance client satisfaction and retention.',
      features: ['Live Chat Support', 'Email Management', 'Phone Support', 'Ticket Management', 'Customer Follow-up'],
      icon: 'ri-customer-service-line',
      color: 'bg-[#1e3a5f]',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20virtual%20assistants%20providing%20various%20business%20services%2C%20multiple%20screens%20showing%20different%20work%20activities%20like%20data%20entry%2C%20social%20media%20management%2C%20bookkeeping%2C%20and%20administrative%20tasks%2C%20modern%20workspace%20with%20diverse%20team%20members%2C%20clean%20corporate%20environment%20with%20technology%20focus&width=1920&height=600&seq=services-hero&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-blue-200">Services</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive virtual staffing solutions designed to streamline your operations and boost productivity with skilled remote professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                WHAT WE OFFER
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Complete Virtual <span className="text-blue-600">Staffing Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From administrative support to specialized business services, we provide the virtual talent you need to grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-600 group">
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i
                        className={`${service.icon} text-2xl ${
                          service.color.includes('text-blue-900') ? '' : 'text-white'
                        }`}
                      ></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                              <i className="ri-check-line text-blue-600"></i>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap w-full justify-center"
                    >
                      Get Started
                      <div className="w-4 h-4 flex items-center justify-center ml-2">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Why Choose Our <span className="text-blue-600">Virtual Services</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600">
                  Our virtual assistants work across different time zones to provide round-the-clock support for your business needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  Rigorous screening and ongoing quality assurance ensure you receive exceptional service from highly skilled professionals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-settings-3-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Flexible Solutions</h3>
                <p className="text-gray-600">
                  Customizable service packages that adapt to your specific business requirements and scale with your growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started with <span className="text-blue-200">Virtual Staffing?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us help you find the perfect virtual assistant to streamline your operations and boost your productivity.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Contact Us Today
              <div className="w-5 h-5 flex items-center justify-center ml-2">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
