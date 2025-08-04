
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WorkPage() {
  const projects = [
    {
      title: 'Healthcare Administration',
      client: 'MedCare Solutions',
      category: 'Executive Assistance',
      description: 'Comprehensive administrative support for a growing healthcare practice, including patient scheduling, insurance verification, and medical record management.',
      image: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/a27b2cb961ab071bb6781d747cf5c387.jfif',
      results: ['50% reduction in scheduling conflicts', '90% faster insurance processing', '24/7 patient support coverage'],
    },
    {
      title: 'E-commerce Operations',
      client: 'RetailPro Inc.',
      category: 'Data Entry & Management',
      description: 'Complete inventory management and order processing support for a rapidly expanding e-commerce business.',
      image: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/adb140c52221b9ab7700bb8ad77d2b46.jfif',
      results: ['99% order accuracy rate', '40% faster processing time', '300% increase in order volume handled'],
    },
    {
      title: 'Financial Services Support',
      client: 'Capital Advisors',
      category: 'Bookkeeping',
      description: 'Professional bookkeeping and financial analysis support for a boutique financial advisory firm.',
      image: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/b3ead448ebc9d3d363dacf5019338aa4.jfif',
      results: ['100% compliance with regulations', '60% reduction in processing time', 'Monthly financial reports delivered'],
    },
    {
      title: 'Marketing Agency Expansion',
      client: 'Creative Solutions',
      category: 'Social Media Management',
      description: 'Social media management and content creation for multiple client accounts at a digital marketing agency.',
      image: 'https://readdy.ai/api/search-image?query=Creative%20marketing%20agency%20workspace%20with%20virtual%20assistants%20managing%20social%20media%20campaigns%2C%20multiple%20screens%20showing%20social%20media%20platforms%2C%20content%20creation%20tools%2C%20colorful%20modern%20office%20environment%20with%20creative%20design%20elements&width=600&height=400&seq=marketing-work&orientation=landscape',
      results: ['200% increase in social engagement', '50+ campaigns managed monthly', '95% client satisfaction rate'],
    },
    {
      title: 'Legal Practice Administration',
      client: 'Johnson & Associates',
      category: 'Executive Assistance',
      description: 'Complete administrative support for a busy law practice including client communications, document preparation, and case management.',
      image: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/d4c18bff9ee672b5aa1aced187ea96cd.jfif',
      results: ['80% reduction in response time', 'Streamlined case management', '24/7 client communication support'],
    },
    {
      title: 'Real Estate Operations',
      client: 'Premier Properties',
      category: 'Travel & Calendar Management',
      description: 'Comprehensive scheduling and travel coordination for a high-volume real estate brokerage team.',
      image: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/6766b08b9659639399bfd330f51c3f02.jfif',
      results: ['300+ showings coordinated monthly', '95% on-time appointment rate', 'Seamless travel arrangements'],
    }
  ];

  const testimonials = [
    {
      quote: "Virtual Staffing Solutions transformed our operations. Our virtual assistant handles everything from scheduling to customer service with incredible professionalism.",
      author: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      company: "Technology Startup"
    },
    {
      quote: "The quality of virtual assistants provided exceeded our expectations. They seamlessly integrated with our team and boosted our productivity significantly.",
      author: "Michael Rodriguez",
      position: "Operations Manager",
      company: "Manufacturing Solutions"
    },
    {
      quote: "Working with Virtual Staffing Solutions has been a game-changer for our growing practice. Their attention to detail and professionalism is outstanding.",
      author: "Dr. Emily Chen",
      position: "Practice Owner",
      company: "Healthcare Services"
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
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20virtual%20assistants%20showcasing%20successful%20project%20results%2C%20modern%20office%20environment%20with%20multiple%20computer%20screens%20displaying%20various%20business%20achievements%2C%20graphs%20and%20charts%20showing%20positive%20business%20outcomes%2C%20diverse%20team%20celebrating%20success&width=1920&height=600&seq=work-hero&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Our <span className="text-blue-200">Success Stories</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Discover how we've helped businesses across various industries achieve remarkable results through our virtual staffing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                SUCCESS STORIES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                Real Results from <span className="text-blue-600">Real Clients</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                See how our virtual staffing solutions have helped businesses streamline operations, reduce costs, and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 font-medium mb-4 text-sm sm:text-base">{project.client}</p>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                            <div className="w-4 h-4 flex items-center justify-center mr-3">
                              <i className="ri-check-line text-blue-600"></i>
                            </div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
                Our <span className="text-blue-200">Impact</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-4">500+</div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-4">98%</div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-4">15+</div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-4">24/7</div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                CLIENT TESTIMONIALS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
                What Our <span className="text-blue-600">Clients Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <i className="ri-double-quotes-l text-2xl sm:text-3xl text-blue-600"></i>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-blue-900 text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-blue-600 text-xs sm:text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 px-4">
              Ready to Create Your <span className="text-blue-600">Success Story?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Join hundreds of satisfied clients who have transformed their businesses with our virtual staffing solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Start Your Project
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center ml-2">
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
