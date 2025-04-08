import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background overlay with slight opacity */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      backgroundBlendMode: 'multiply'
    }}></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Empowering Lives, <span className="text-secondary">Building Futures</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in">This is user defined and to be modified further</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Button asChild className="bg-secondary hover:bg-secondary-light text-white font-medium py-3 px-8 rounded-md text-lg transition-colors duration-300">
              <Link to="/join">Join Us</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md text-lg hover:bg-white hover:text-blue-700 transition-colors duration-300">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;