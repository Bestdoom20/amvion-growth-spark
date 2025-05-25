
import React, { useEffect, useState } from 'react';
import { ArrowDown, Calendar, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AmvionLanding = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amvion-dark-bg text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amvion-green/10 via-transparent to-amvion-purple/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amvion-green to-amvion-purple bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Scale Your Landscaping Company<br />
            <span className="text-5xl md:text-7xl">and Outbook Everyone</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AI-powered lead generation and client acquisition for landscaping businesses. 
            We generate leads, automate outreach, and book jobs directly into your calendar—
            while you focus on what you do best.
          </p>
          <div className="mt-12">
            <Button 
              onClick={() => scrollToSection('how-we-do-it')}
              className="bg-gradient-to-r from-amvion-green to-amvion-purple hover:from-amvion-green/80 hover:to-amvion-purple/80 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              See How We Do It
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Gradient Line Below Button */}
          <div 
            data-animate
            id="hero-gradient-line"
            className={`mt-8 mx-auto w-64 h-1 bg-gradient-to-r from-transparent via-amvion-green to-amvion-purple transition-all duration-1000 delay-500 ${
              isVisible['hero-gradient-line'] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section id="how-we-do-it" className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 
            data-animate 
            id="how-we-do-it-title"
            className={`text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-amvion-green to-amvion-purple bg-clip-text text-transparent transition-all duration-700 ${
              isVisible['how-we-do-it-title'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            How We Transform Your Business
          </h2>
          
          {/* YouTube Video Placeholder with Glow Effect */}
          <div 
            data-animate
            id="video-container"
            className={`relative max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible['video-container'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gray-900 rounded-2xl p-8 animate-glow">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <Youtube className="h-20 w-20 text-amvion-green" />
                <span className="ml-4 text-2xl text-gray-300">Watch Our Process</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection('calendly-section')}
            className="bg-gradient-to-r from-amvion-green to-amvion-purple hover:from-amvion-green/80 hover:to-amvion-purple/80 text-white px-12 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105 animate-glow"
          >
            Book Your Growth Call Now
          </Button>
        </div>
      </section>

      {/* Animated Divider */}
      <div 
        data-animate
        id="divider-1"
        className={`h-1 bg-gradient-to-r from-transparent via-amvion-green to-amvion-purple transition-all duration-1000 ${
          isVisible['divider-1'] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      ></div>

      {/* Visual Explainer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 
            data-animate
            id="explainer-title"
            className={`text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-amvion-green to-amvion-purple bg-clip-text text-transparent transition-all duration-700 ${
              isVisible['explainer-title'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            The Amvion Advantage
          </h2>

          {/* Block 1 - Left Image, Right Text */}
          <div 
            data-animate
            id="block-1"
            className={`flex flex-col md:flex-row items-center mb-20 transition-all duration-700 delay-200 ${
              isVisible['block-1'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="w-full h-64 bg-gradient-to-br from-amvion-green/20 to-amvion-purple/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-gray-300">AI Lead Generation</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-amvion-green text-lg font-semibold mb-2">Smart Targeting</h4>
              <h3 className="text-3xl font-bold mb-4">Find Your Perfect Customers</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our AI identifies homeowners and businesses in your area who need landscaping services right now. 
                No more cold calling or hoping for referrals.
              </p>
            </div>
          </div>

          {/* Block 2 - Right Image, Left Text */}
          <div 
            data-animate
            id="block-2"
            className={`flex flex-col md:flex-row-reverse items-center mb-20 transition-all duration-700 delay-400 ${
              isVisible['block-2'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="w-full h-64 bg-gradient-to-br from-amvion-purple/20 to-amvion-green/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-gray-300">Automated Outreach</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-amvion-purple text-lg font-semibold mb-2">Personalized Contact</h4>
              <h3 className="text-3xl font-bold mb-4">Engage Every Lead Automatically</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We craft personalized messages and follow-ups for each prospect, maintaining consistent communication 
                until they're ready to book your services.
              </p>
            </div>
          </div>

          {/* Block 3 - Left Image, Right Text */}
          <div 
            data-animate
            id="block-3"
            className={`flex flex-col md:flex-row items-center mb-20 transition-all duration-700 delay-600 ${
              isVisible['block-3'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="w-full h-64 bg-gradient-to-br from-amvion-green/20 to-amvion-purple/20 rounded-2xl flex items-center justify-center">
                <Calendar className="h-16 w-16 text-amvion-green" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-amvion-green text-lg font-semibold mb-2">Seamless Booking</h4>
              <h3 className="text-3xl font-bold mb-4">Jobs Booked Directly to Your Calendar</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                When leads are ready, they book appointments directly into your calendar. 
                No back-and-forth scheduling—just confirmed jobs ready for you to complete.
              </p>
            </div>
          </div>

          {/* Block 4 - Right Image, Left Text */}
          <div 
            data-animate
            id="block-4"
            className={`flex flex-col md:flex-row-reverse items-center mb-20 transition-all duration-700 delay-800 ${
              isVisible['block-4'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="w-full h-64 bg-gradient-to-br from-amvion-purple/20 to-amvion-green/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-gray-300">Business Growth</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-amvion-purple text-lg font-semibold mb-2">Scale Effortlessly</h4>
              <h3 className="text-3xl font-bold mb-4">Focus on What You Do Best</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                While Amvion handles lead generation and client acquisition, you focus on delivering 
                exceptional landscaping services and growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Puzzle Piece Connection Section */}
      <section className="py-20 bg-gradient-to-br from-amvion-green/5 to-amvion-purple/5">
        <div className="container mx-auto px-6 text-center">
          <h2 
            data-animate
            id="puzzle-title"
            className={`text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-amvion-green to-amvion-purple bg-clip-text text-transparent transition-all duration-700 ${
              isVisible['puzzle-title'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            The Missing Piece to Your Success
          </h2>
          <div 
            data-animate
            id="puzzle-content"
            className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${
              isVisible['puzzle-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Amvion integrates seamlessly into your landscaping business like the perfect puzzle piece. 
              <span className="text-amvion-green font-semibold"> Fully automated. Completely hassle-free.</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              You don't lift a finger. We bring in the customers, engage them with personalized outreach, 
              and book the jobs directly into your calendar. All you do is show up and deliver your exceptional work. 
              It's time to stop chasing leads and start focusing on what made you passionate about landscaping in the first place.
            </p>
            <div className="bg-gradient-to-r from-amvion-green/20 to-amvion-purple/20 rounded-2xl p-8 border border-amvion-green/30">
              <p className="text-2xl font-bold text-white">
                Zero extra work. Maximum growth. That's the Amvion promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Animated Divider */}
      <div 
        data-animate
        id="divider-2"
        className={`h-1 bg-gradient-to-r from-transparent via-amvion-purple to-amvion-green transition-all duration-1000 ${
          isVisible['divider-2'] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      ></div>

      {/* Calendly Section */}
      <section id="calendly-section" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 
            data-animate
            id="calendly-title"
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amvion-green to-amvion-purple bg-clip-text text-transparent transition-all duration-700 ${
              isVisible['calendly-title'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Scale?
          </h2>
          <p 
            data-animate
            id="calendly-subtitle"
            className={`text-xl text-gray-300 mb-12 transition-all duration-700 delay-200 ${
              isVisible['calendly-subtitle'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Book a 15-minute call to discover how Amvion can transform your landscaping business
          </p>
          
          {/* Calendly Embed Placeholder with Glow Effect */}
          <div 
            data-animate
            id="calendly-container"
            className={`relative max-w-4xl mx-auto transition-all duration-700 delay-400 ${
              isVisible['calendly-container'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gray-900 rounded-2xl p-8 animate-glow">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-amvion-green mx-auto mb-4" />
                  <p className="text-xl text-gray-300 mb-4">Calendly Integration</p>
                  <p className="text-gray-400">
                    Replace this placeholder with your Calendly embed code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">
            © 2024 Amvion. Transforming landscaping businesses with AI-powered growth solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AmvionLanding;
