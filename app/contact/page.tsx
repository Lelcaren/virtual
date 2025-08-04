
// Original code:
/*
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
*/
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'appointment'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Administrative Support',
    'Customer Service',
    'Data Entry & Processing',
    'Social Media Management',
    'Content Creation',
    'Research & Analysis',
    'Project Management',
    'Technical Support',
    'Other'
  ];

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'hello@virtualstaffing.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      details: '123 Business Center Dr',
      subtext: 'New York, NY 10001'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20wearing%20headset%20in%20modern%20call%20center%2C%20friendly%20business%20woman%20smiling%20at%20camera%2C%20contemporary%20office%20workspace%20with%20computers%20and%20communication%20technology%2C%20clean%20corporate%20environment%20with%20natural%20lighting&width=1920&height=600&seq=contact-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Get In <span className="text-blue-200">Touch</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Ready to transform your business with exceptional virtual staffing? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                CONTACT INFORMATION
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Multiple Ways to <span className="text-blue-600">Reach Us</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${info.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Choose How You'd Like to <span className="text-blue-600">Connect</span>
                </h2>
                <p className="text-lg text-gray-600">Send us a message or book a consultation call directly</p>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-white p-1 rounded-full shadow-md">
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                      activeTab === 'message'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                      <i className="ri-mail-line"></i>
                    </div>
                    Send Message
                  </button>
                  <button
                    onClick={() => setActiveTab('appointment')}
                    className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                      activeTab === 'appointment'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2 inline-block">
                      <i className="ri-calendar-line"></i>
                    </div>
                    Book Appointment
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Message Form */}
                {activeTab === 'message' && (
                  <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
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
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          maxLength={500}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us about your virtual staffing needs..."
                        ></textarea>
                        <div className="text-right text-sm text-gray-500 mt-1">
                          {formData.message.length}/500 characters
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || formData.message.length > 500}
                        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="w-5 h-5 flex items-center justify-center mr-2">
                              <i className="ri-loader-4-line animate-spin"></i>
                            </div>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message
                            <div className="w-5 h-5 flex items-center justify-center ml-2">
                              <i className="ri-send-plane-line"></i>
                            </div>
                          </span>
                        )}
                      </button>
                    </form>
                  </div>
                )}

                {/* Appointment Booking */}
                {activeTab === 'appointment' && (
                  <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-1">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Schedule Your Consultation</h3>
                      <p className="text-gray-600">Book a free 30-minute consultation to discuss your virtual staffing needs</p>
                    </div>

                    {/* Appointment Booking Placeholder */}
                    <div className="h-[600px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="ri-calendar-line text-2xl text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">Motion Booking Integration</h4>
                        <p className="text-gray-500 mb-4">Your Motion calendar booking will be integrated here</p>
                        <div className="text-sm text-gray-400">
                          Ready to connect your Motion scheduling system
                        </div>
                      </div>
                    </div>

                    {/* Direct booking options */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Book Your Consultation Now:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-3">
                              <i className="ri-phone-line text-blue-600"></i>
                            </div>
                            <span className="font-medium text-gray-700">Call to Schedule</span>
                          </div>
                          <span className="text-blue-600 font-semibold">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center mr-3">
                              <i className="ri-mail-line text-blue-600"></i>
                            </div>
                            <span className="font-medium text-gray-700">Email for Appointment</span>
                          </div>
                          <span className="text-blue-600 font-semibold">hello@virtualstaffing.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="space-y-8 lg:col-span-1">
                  <div className="bg-blue-900 text-white p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                          <i className="ri-check-line text-blue-200"></i>
                        </div>
                        <div>
                          <strong>15+ Years Experience</strong>
                          <p className="text-blue-100 text-sm">Proven track record in virtual staffing solutions</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                          <i className="ri-check-line text-blue-200"></i>
                        </div>
                        <div>
                          <strong>24/7 Support</strong>
                          <p className="text-blue-100 text-sm">Round-the-clock assistance when you need it</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                          <i className="ri-check-line text-blue-200"></i>
                        </div>
                        <div>
                          <strong>Quality Guaranteed</strong>
                          <p className="text-blue-100 text-sm">Rigorous screening and ongoing quality assurance</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Response Time</h3>
                    <p className="text-gray-600 mb-4">
                      We understand that time is valuable. Our team responds to all inquiries within:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Phone calls:</span>
                        <span className="font-medium text-blue-600">Immediate</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Emails:</span>
                        <span className="font-medium text-blue-600">Within 4 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Contact form:</span>
                        <span className="font-medium text-blue-600">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Appointments:</span>
                        <span className="font-medium text-blue-600">Same day booking</span>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Benefits */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">What to Expect in Your Consultation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                          <i className="ri-check-line"></i>
                        </div>
                        <span className="text-sm">Business needs assessment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                          <i className="ri-check-line"></i>
                        </div>
                        <span className="text-sm">Virtual assistant recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                          <i className="ri-check-line"></i>
                        </div>
                        <span className="text-sm">Custom service package options</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                          <i className="ri-check-line"></i>
                        </div>
                        <span className="text-sm">Implementation timeline discussion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                A Collaborative Partner of <span className="text-blue-600">Belyotte Global Opportunities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Through our partnership with Belyotte Global Opportunities, we provide access to a global network of skilled virtual professionals, ensuring you get the best talent for your specific needs.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Learn More About Our Partnership
                <div className="w-4 h-4 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
