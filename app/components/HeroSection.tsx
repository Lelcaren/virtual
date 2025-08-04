
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative py-16 sm:py-20 lg:py-28 xl:py-32 bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Luxury%20modern%20corporate%20headquarters%20with%20diverse%20executives%20in%20elegant%20business%20attire%2C%20sophisticated%20workspace%20featuring%20floor-to-ceiling%20windows%20overlooking%20city%20skyline%2C%20premium%20contemporary%20furniture%20and%20cutting-edge%20technology%2C%20professional%20business%20leaders%20in%20designer%20suits%20collaborating%20in%20upscale%20office%20environment%20with%20dramatic%20architectural%20lighting&width=1920&height=1080&seq=luxury-exec-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6 border border-white/20">
                TRUSTED VIRTUAL STAFFING PARTNER
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with 
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mt-2">Expert Virtual Staff</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Partner with skilled virtual assistants who understand your business needs. From administrative support to specialized services - we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link 
                  href="/get-started" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap text-center"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/about" 
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 whitespace-nowrap text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative lg:pl-8 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/b990a4ae29060bbd91d7992ee03c8bf4.jfif"
                  alt="Virtual Staffing Solutions Team"
                  className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px] object-cover object-top rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <i className="ri-team-line text-2xl sm:text-3xl lg:text-4xl text-white"></i>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
