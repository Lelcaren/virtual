
'use client';

import Link from 'next/link';

export default function ValueSection() {
  const values = [
    {
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% while maintaining high-quality service standards.',
      icon: 'ri-money-dollar-circle-line',
      benefits: ['No office overhead', 'Flexible pricing', 'Pay only for work done', 'Reduced HR costs']
    },
    {
      title: 'Expert Talent',
      description: 'Access to skilled professionals across various industries and specializations.',
      icon: 'ri-user-star-line',
      benefits: ['Specialized skills', 'Industry experience', 'Continuous training', 'Quality guaranteed']
    },
    {
      title: 'Scalable Solutions',
      description: 'Easily scale your team up or down based on business needs and seasonal demands.',
      icon: 'ri-line-chart-line',
      benefits: ['Flexible team size', 'Quick scaling', 'Project-based work', 'Long-term partnerships']
    },
    {
      title: 'Global Coverage',
      description: 'Virtual assistants available across different time zones for round-the-clock support.',
      icon: 'ri-global-line',
      benefits: ['24/7 availability', 'Multiple time zones', 'Cultural diversity', 'Language skills']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            WHY VIRTUAL STAFFING
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
            The Value of <span className="text-blue-600">Virtual Staffing</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover how virtual staffing can transform your business operations and drive growth while reducing costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:bg-blue-600">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white transition-colors">
                <i className={`${value.icon} text-lg sm:text-xl lg:text-2xl text-white group-hover:text-blue-600`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4 group-hover:text-white">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-blue-100">{value.description}</p>
              
              <ul className="space-y-2 text-left">
                {value.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 group-hover:text-blue-100">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 group-hover:text-blue-200"></i>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Ready to experience the benefits of virtual staffing? Let's discuss how we can help transform your business operations.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg whitespace-nowrap"
          >
            Start Your Journey
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
