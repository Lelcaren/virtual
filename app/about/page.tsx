
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20in%20elegant%20business%20attire%2C%20confident%20executive%20portrait%20with%20warm%20smile%2C%20modern%20corporate%20headshot%20with%20sophisticated%20lighting%2C%20business%20professional%20appearance%20conveying%20leadership%20expertise%20and%20approachability%2C%20clean%20contemporary%20office%20background%20with%20natural%20lighting%20showcasing%20executive%20presence&width=300&height=400&seq=ceo-portrait&orientation=portrait',
      bio: 'With over 20 years of experience in virtual staffing, Sarah founded our company to bridge the gap between businesses and top-tier remote talent.',
    },
    {
      name: 'Michael Chen',
      position: 'Operations Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20operations%20director%20in%20sharp%20business%20suit%2C%20confident%20executive%20portrait%20with%20friendly%20smile%2C%20modern%20corporate%20headshot%20with%20professional%20lighting%2C%20business%20attire%20conveying%20competence%20and%20reliability%2C%20contemporary%20office%20environment%20with%20clean%20background%20showcasing%20operational%20excellence&width=300&height=400&seq=ops-director&orientation=portrait',
      bio: 'Michael oversees our global operations and ensures seamless integration of virtual assistants with client teams worldwide.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Quality Assurance Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20quality%20manager%20in%20sophisticated%20business%20attire%2C%20confident%20portrait%20with%20warm%20professional%20smile%2C%20executive%20headshot%20with%20elegant%20lighting%2C%20business%20professional%20appearance%20conveying%20expertise%20and%20approachability%2C%20modern%20office%20setting%20with%20clean%20contemporary%20background&width=300&height=400&seq=qa-manager&orientation=portrait',
      bio: 'Emily leads our quality assurance team, maintaining the highest standards across all virtual staffing placements.',
    },
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and transparency in all our business relationships.',
    },
    {
      icon: 'ri-award-line',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from talent acquisition to client service delivery.',
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We believe in the power of collaboration between our clients and virtual assistants.',
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We continuously innovate our processes and technology to provide better virtual staffing solutions.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section
          className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20luxury%20corporate%20office%20with%20diverse%20executives%20collaborating%2C%20sophisticated%20workspace%20with%20floor-to-ceiling%20windows%2C%20elegant%20contemporary%20furniture%20and%20premium%20technology%2C%20professional%20business%20leaders%20in%20designer%20suits%20working%20in%20upscale%20office%20environment%20with%20dramatic%20lighting%20and%20metropolitan%20city%20views&width=1920&height=600&seq=luxury-exec-office&orientation=landscape')`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-100 rounded-full text-sm font-medium mb-6 border border-white/20">
                ABOUT OUR EXCELLENCE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                About <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Company</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Partnering with Belyotte Global Opportunities to deliver exceptional virtual staffing solutions that transform businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  OUR STORY
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
                  15 Years of Virtual Staffing Excellence
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Founded as a collaborative partner of Belyotte Global Opportunities, Virtual Staffing Solutions has been at the forefront of the remote work revolution for over 15 years. We recognized early on that businesses needed access to skilled professionals without geographical limitations.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Our mission is simple: connect businesses with exceptional virtual talent that drives growth, efficiency, and success. We've helped over 500 companies streamline their operations while maintaining the highest standards of professionalism.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20executives%20and%20virtual%20assistants%20in%20modern%20collaborative%20meeting%2C%20diverse%20team%20of%20successful%20business%20professionals%20on%20video%20conference%20call%20with%20multiple%20screens%2C%20elegant%20contemporary%20workspace%20with%20premium%20technology%2C%20sophisticated%20office%20environment%20showcasing%20global%20remote%20collaboration%20and%20executive%20leadership%20excellence&width=600&height=500&seq=exec-meeting&orientation=landscape"
                    alt="Our Team"
                    className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Live Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                OUR VALUES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                What We <span className="text-blue-600">Stand For</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Our core values guide everything we do, from selecting virtual assistants to delivering exceptional client service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <i className={`${value.icon} text-xl sm:text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                OUR TEAM
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                Meet Our <span className="text-blue-600">Leadership Team</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Our experienced leadership team is dedicated to providing exceptional virtual staffing solutions and maintaining the highest standards of service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4 text-base sm:text-lg">{member.position}</p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.bio}</p>
                      <div className="mt-4 flex space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                          <i className="ri-linkedin-line text-sm"></i>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                          <i className="ri-twitter-line text-sm"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6 border border-white/20">
                GLOBAL PARTNERSHIP
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A Collaborative Partner of <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Belyotte Global Opportunities</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Through our partnership with Belyotte Global Opportunities, we leverage a global network of talent and resources to provide unparalleled virtual staffing solutions that meet the diverse needs of modern businesses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap"
              >
                Get In Touch
                <div className="w-5 h-5 flex items-center justify-center ml-2">
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
