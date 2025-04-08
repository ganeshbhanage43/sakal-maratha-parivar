
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">E</span>
          </div>
          <span className="font-heading font-bold text-xl">Empower NGO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="/events" className="font-medium hover:text-primary transition-colors">Events</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
          <Button asChild className="btn-primary">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link 
            to="/" 
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/events" 
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link 
            to="/contact" 
            className="font-medium text-lg hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button asChild className="btn-primary mt-4">
            <Link to="/donate" onClick={toggleMenu}>Donate Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
