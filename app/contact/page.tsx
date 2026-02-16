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
  const [activeTab, setActiveTab] = useState('message');

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
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare form data for Web3Forms
      const web3FormData = new FormData();
      web3FormData.append("access_key", "d6c2ae2b-ed5f-4e22-a5d8-bf933f6d1f1f");
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("company", formData.company);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("service", formData.service);
      web3FormData.append("message", formData.message);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
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
      details: '757-296-8897',
      subtext: 'Mon-Fri 9AM-6PM EST',
      link: 'tel:757-296-8897',
      color: 'blue'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'info@thevirtualstaffingsolution.com',
      subtext: 'We reply within 24 hours',
      link: 'mailto:info@thevirtualstaffingsolution.com',
      color: 'indigo'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-600',
        lightBg: 'bg-blue-50',
        ring: 'ring-blue-100'
      },
      indigo: {
        bg: 'bg-indigo-600',
        hover: 'hover:bg-indigo-700',
        text: 'text-indigo-600',
        lightBg: 'bg-indigo-50',
        ring: 'ring-indigo-100'
      },
      purple: {
        bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        text: 'text-purple-600',
        lightBg: 'bg-purple-50',
        ring: 'ring-purple-100'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop')`
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-md">
                CONTACT INFORMATION
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Multiple Ways to <span className="text-blue-600">Reach Us</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Choose your preferred method of contact. We're here to help you get started.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color);
                const CardWrapper = info.link ? 'a' : 'div';
                const linkProps = info.link ? { href: info.link } : {};

                return (
                  <CardWrapper
                    key={index}
                    {...linkProps}
                    className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                      info.link ? 'cursor-pointer hover:-translate-y-2' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 ${colors.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} ${info.link ? colors.hover : ''} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${info.icon} text-2xl sm:text-3xl text-white`}></i>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {info.title}
                        </h3>
                        <p className={`${colors.text} font-semibold text-sm sm:text-base break-words`}>
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {info.subtext}
                        </p>
                      </div>

                      {info.link && (
                        <div className="mt-4 flex items-center text-gray-400 group-hover:text-blue-600 transition-colors">
                          <span className="text-xs sm:text-sm font-medium">Click to contact</span>
                          <i className="ri-arrow-right-line ml-2 text-sm group-hover:translate-x-1 transition-transform"></i>
                        </div>
                      )}
                    </div>

                    <div className={`absolute top-0 right-0 w-20 h-20 ${colors.lightBg} rounded-bl-full opacity-50`}></div>
                  </CardWrapper>
                );
              })}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Prefer to Schedule a Call?
                    </h3>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Book a free consultation at a time that works for you
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('appointment')}
                    className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base"
                  >
                    Book Appointment
                    <i className="ri-calendar-line ml-2"></i>
                  </button>
                </div>
              </div>
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
                    <i className="ri-mail-line mr-2"></i>
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
                    <i className="ri-calendar-line mr-2"></i>
                    Book Appointment
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Message Form */}
                {activeTab === 'message' && (
                  <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                        Please fill in all required fields correctly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <i className="ri-loader-4-line animate-spin mr-2"></i>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message
                            <i className="ri-send-plane-line ml-2"></i>
                          </span>
                        )}
                      </button>
                    </form>
                  </div>
                )}

                {/* Appointment Booking */}
                {activeTab === 'appointment' && (
                  <div className="bg-white p-8 rounded-xl shadow-lg lg:col-span-2">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Schedule Your Consultation</h3>
                      <p className="text-gray-600">Book a free 30-minute consultation to discuss your virtual staffing needs</p>
                    </div>

                    <div className="relative">
                      <iframe
                        src="https://meetings-na2.hubspot.com/kevin-otey"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        className="rounded-lg border border-gray-200"
                        title="Book Virtual Staffing Consultation"
                      ></iframe>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Having trouble with the calendar?</h4>
                      <div className="space-y-3">
                        <a 
                          href="tel:757-296-8897"
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all gap-2"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-100 rounded-lg flex-shrink-0">
                              <i className="ri-phone-line text-blue-600"></i>
                            </div>
                            <span className="font-medium text-gray-700 text-sm sm:text-base">Call to Schedule</span>
                          </div>
                          <span className="text-blue-600 font-semibold text-sm sm:text-base break-all sm:break-normal ml-11 sm:ml-0">757-296-8897</span>
                        </a>
                        <a 
                          href="mailto:info@thevirtualstaffingsolution.com"
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all gap-2"
                        >
                          <div className="flex items-center min-w-0">
                            <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-100 rounded-lg flex-shrink-0">
                              <i className="ri-mail-line text-blue-600"></i>
                            </div>
                            <span className="font-medium text-gray-700 text-sm sm:text-base whitespace-nowrap">Email for Appointment</span>
                          </div>
                          <span className="text-blue-600 font-semibold text-xs sm:text-sm ml-11 sm:ml-0 break-all">info@thevirtualstaffingsolution.com</span>
                        </a>
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
                        <i className="ri-check-line text-blue-200 mr-3 mt-1"></i>
                        <div>
                          <strong>15+ Years Experience</strong>
                          <p className="text-blue-100 text-sm">Proven track record in virtual staffing solutions</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-blue-200 mr-3 mt-1"></i>
                        <div>
                          <strong>24/7 Support</strong>
                          <p className="text-blue-100 text-sm">Round-the-clock assistance when you need it</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-blue-200 mr-3 mt-1"></i>
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
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">What to Expect in Your Consultation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="ri-check-line mr-3 mt-0.5"></i>
                        <span className="text-sm">Business needs assessment</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line mr-3 mt-0.5"></i>
                        <span className="text-sm">Virtual assistant recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line mr-3 mt-0.5"></i>
                        <span className="text-sm">Custom service package options</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line mr-3 mt-0.5"></i>
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
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
    </div>
  );
}
