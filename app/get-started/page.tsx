'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    teamSize: '',
    services: [] as string[], // Fix: Explicitly type as string[]
    timeline: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });

  const steps = [
    {
      number: 1,
      title: 'Business Information',
      description: 'Tell us about your business'
    },
    {
      number: 2,
      title: 'Service Requirements',
      description: 'What services do you need?'
    },
    {
      number: 3,
      title: 'Contact Details',
      description: 'How can we reach you?'
    }
  ];

  const businessTypes = [
    'Healthcare', 'E-commerce', 'Real Estate', 'Legal Services', 'Financial Services',
    'Marketing Agency', 'Technology', 'Consulting', 'Manufacturing', 'Other'
  ];

  const teamSizes = [
    '1-5 employees', '6-25 employees', '26-100 employees', '100+ employees'
  ];

  const services = [
    'Executive Assistance', 'Bookkeeping', 'Social Media Management',
    'Meeting Minutes', 'Travel Arrangements', 'Calendar Management',
    'Data Entry', 'Research Services'
  ];

  const timelines = [
    'Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month', 'Flexible'
  ];

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];

    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Thank you! We will contact you within 24 hours to discuss your virtual staffing needs.');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20onboarding%20process%20with%20virtual%20assistant%20consultation%2C%20modern%20office%20environment%20with%20client%20meeting%20setup%2C%20friendly%20business%20representatives%20explaining%20virtual%20staffing%20solutions%2C%20clean%20corporate%20workspace%20with%20presentation%20materials%20and%20welcome%20atmosphere&width=1920&height=600&seq=getstarted-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get <span className="text-blue-200">Started Today</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Begin your virtual staffing journey with a personalized consultation. We'll match you with the perfect virtual assistant for your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                HOW IT WORKS
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Simple <span className="text-blue-600">3-Step Process</span>
              </h2>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      currentStep >= step.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    } font-semibold`}>
                      {step.number}
                    </div>
                    <div className="ml-4 text-left">
                      <div className={`font-medium ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-600'}`}>
                        {step.title}
                      </div>
                      <div className="text-sm text-gray-500">{step.description}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                {/* Step 1: Business Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Tell Us About Your Business</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">What type of business do you have?</label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {businessTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, businessType: type }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                              formData.businessType === type
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">What's your team size?</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {teamSizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, teamSize: size }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                              formData.teamSize === size
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Requirements */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">What Services Do You Need?</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Select all services you need:</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                              formData.services.includes(service)
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">When do you need to start?</label>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, timeline }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                              formData.timeline === timeline
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                            }`}
                          >
                            {timeline}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Requirements
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us more about your specific needs..."
                      ></textarea>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.requirements.length}/500 characters
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="flex items-center px-6 py-3 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-arrow-left-line"></i>
                    </div>
                    Previous
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Next Step
                      <div className="w-4 h-4 flex items-center justify-center ml-2">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={formData.requirements.length > 500}
                      className="flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                    >
                      Submit Request
                      <div className="w-4 h-4 flex items-center justify-center ml-2">
                        <i className="ri-send-plane-line"></i>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                What Happens <span className="text-blue-600">Next?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-phone-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Consultation Call</h3>
                <p className="text-gray-600">We'll contact you within 24 hours to discuss your requirements and answer any questions.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Perfect Match</h3>
                <p className="text-gray-600">We'll match you with pre-screened virtual assistants who meet your specific needs and industry requirements.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Get Started</h3>
                <p className="text-gray-600">Begin working with your virtual assistant and start seeing immediate improvements in productivity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
