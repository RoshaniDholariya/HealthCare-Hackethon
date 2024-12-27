import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Hospital, FileText, User, ArrowRight, Phone, Mail, Clock, Menu, X, CheckCircle, Star, ArrowUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "HealthCare Hub transformed how I manage my healthcare. The interface is intuitive and booking appointments is a breeze!",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Provider",
      content: "As a doctor, this platform has streamlined my practice. Patient management has never been more efficient.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Administrator",
      content: "The comprehensive features and user-friendly design make this platform stand out from others in the market.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="min-h-screen bg-white fonts-inter">
      {/* Hero Section with Glassmorphism */}
      <header className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        
        {/* Floating Navigation with Backdrop Blur */}
        <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Hospital className="h-8 w-8" />
                <span className="text-xl font-bold">HealthCare Hub</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="hover:text-blue-100 transition-colors">Features</a>
                <a href="#testimonials" className="hover:text-blue-100 transition-colors">Testimonials</a>
                <a href="#contact" className="hover:text-blue-100 transition-colors">Contact</a>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  Sign In
                </button>
              </div>
              
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md p-6 space-y-4 border-t border-white/10">
                <a href="#features" className="block hover:text-blue-100">Features</a>
                <a href="#testimonials" className="block hover:text-blue-100">Testimonials</a>
                <a href="#contact" className="block hover:text-blue-100">Contact</a>
                <button className="w-full bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg">
                  Sign In
                </button>
              </div>
            )}
          </div>
        </nav>
        
        {/* Hero Content with Animations */}
        <div className="container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
          <div className="md:w-2/3" id="hero" data-animate>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Your Health Journey,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Simplified
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-50 animate-fade-in-delay">
              Access medical records, schedule appointments, and find nearby hospitals - all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group">
                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section with Hover Cards */}
      <section id="features" className="py-20 bg-gray-50" data-animate>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to manage your healthcare journey in one place
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8 text-blue-600" />,
                title: "Hospital Locator",
                description: "Find nearby hospitals with real-time availability and directions"
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: "Easy Scheduling",
                description: "Book and manage appointments with your healthcare providers"
              },
              {
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: "Health Records",
                description: "Access your complete medical history and test results securely"
              },
              {
                icon: <User className="h-8 w-8 text-blue-600" />,
                title: "Patient Portal",
                description: "Manage your health data and communicate with doctors"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/50 backdrop-blur-sm hover:bg-white">
                <CardContent className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1M+", label: "Active Users", icon: <User className="h-8 w-8" /> },
              { number: "500+", label: "Partner Hospitals", icon: <Hospital className="h-8 w-8" /> },
              { number: "24/7", label: "Support Available", icon: <Clock className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Modern Cards */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeTestimonial === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                  }`}
                >
                  <Card className="bg-white/50 backdrop-blur-sm p-8 shadow-xl">
                    <CardContent>
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-lg italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Modern Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions about our platform? Our team is here to help you 24/7.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="h-6 w-6" />, text: "+1 (555) 123-4567" },
                  { icon: <Mail className="h-6 w-6" />, text: "support@healthcarehub.com" },
                  { icon: <Clock className="h-6 w-6" />, text: "24/7 Support Available" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-gray-600">
                    <div className="p-3 bg-blue-100 rounded-full">{item.icon}</div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-2xl border-none bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
                    Send Message <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with Modern Design */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hospital className="h-8 w-8 text-white" />
                <span className="text-xl font-bold text-white">HealthCare Hub</span>
              </div>
              <p className="text-sm">
                Making healthcare accessible and manageable for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#testimonials" className="block hover:text-white transition-colors">Testimonials</a>
                <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  Twitter <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  Facebook <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 HealthCare Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default LandingPage;