import React from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';

function App() {
  return (
    <div className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center text-white"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome to Our World
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Experience the beauty of interactive design with our elegant navigation system
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Us" bgColor="bg-gray-50">
        <div className="max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We craft beautiful, interactive experiences that engage users and deliver results. 
            Our navigation demonstrates the power of thoughtful design combined with smooth interactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Clean Design</h3>
              <p className="text-slate-600">Minimalist approach for maximum impact</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Interactive</h3>
              <p className="text-slate-600">Engaging hover and scroll effects</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Responsive</h3>
              <p className="text-slate-600">Perfect on all devices and screens</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Services" bgColor="bg-white">
        <div className="max-w-4xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Notice how the navigation smoothly transitions as you scroll through different sections. 
            This creates a cohesive and professional user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Web Development</h3>
              <p className="text-slate-600">
                Creating responsive, interactive websites with modern technologies and best practices.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl hover:from-slate-100 hover:to-gray-100 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">UI/UX Design</h3>
              <p className="text-slate-600">
                Designing intuitive interfaces that provide exceptional user experiences across all platforms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" bgColor="bg-slate-900">
        <div className="max-w-2xl text-center">
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Ready to create something amazing together? Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105"
            >
              Send Email
            </a>
            <a
              href="#home"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105"
            >
              Back to Top
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;