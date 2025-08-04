
'use client';

export default function ExperienceSection() {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: 'ri-user-smile-line' },
    { number: '15+', label: 'Years Experience', icon: 'ri-award-line' },
    { number: '1000+', label: 'Projects Completed', icon: 'ri-checkbox-circle-line' },
    { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-line' }
  ];

  const features = [
    {
      title: 'Rigorous Screening Process',
      description: 'Every virtual assistant undergoes comprehensive background checks, skills assessments, and interview processes.',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Ongoing Quality Assurance',
      description: 'Regular performance reviews and client feedback ensure consistently high service standards.',
      icon: 'ri-star-line'
    },
    {
      title: '24/7 Global Support',
      description: 'Round-the-clock support across different time zones to meet your business needs.',
      icon: 'ri-time-line'
    },
    {
      title: 'Seamless Integration',
      description: 'Virtual assistants who adapt quickly to your tools, processes, and company culture.',
      icon: 'ri-links-line'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              15+ Years of Virtual <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Staffing Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              As a collaborative partner of Belyotte Global Opportunities, we've been connecting businesses with exceptional virtual talent for over 15 years. Our proven track record speaks for itself.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className={`${stat.icon} text-lg sm:text-xl text-white`}></i>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/50 p-4 rounded-xl hover:bg-white/80 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className={`${feature.icon} text-sm text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/170185c5f3dae527e02f9d5e6410b054.jfif"
                alt="Virtual Team Excellence"
                className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] object-cover object-top rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <i className="ri-award-fill text-xl sm:text-2xl text-white"></i>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99%</div>
                  <div className="text-xs text-gray-600">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
