
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ValueSection from './components/ValueSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ValueSection />
        <ExperienceSection />
        
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                Experience the <span className="text-blue-600">Difference</span> of Professional Virtual Staffing
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Discover why businesses worldwide trust us with their virtual staffing needs and operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Fast Deployment</h3>
                <p className="text-gray-600 leading-relaxed">Get your virtual assistant matched and onboarded within 48 hours, ensuring minimal disruption to your workflow.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Proven Reliability</h3>
                <p className="text-gray-600 leading-relaxed">99.8% client satisfaction rate with over 15 years of experience in virtual staffing excellence and dependable service delivery.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-global-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Global Talent Pool</h3>
                <p className="text-gray-600 leading-relaxed">Access to skilled professionals across multiple time zones, ensuring coverage and expertise that matches your business needs.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 sm:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Join hundreds of successful businesses that have streamlined their operations with our virtual staffing solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap"
                    >
                      Schedule Consultation
                      <div className="w-5 h-5 flex items-center justify-center ml-2">
                        <i className="ri-calendar-line"></i>
                      </div>
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 whitespace-nowrap"
                    >
                      View Services
                      <div className="w-5 h-5 flex items-center justify-center ml-2">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
          <Footer />
        </section>
      </main>
    </div>
  );
}