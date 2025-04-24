
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Impact from '@/components/home/Impact';
import Events from '@/components/home/Events';
import CTA from '@/components/home/CTA';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast that appears when the page loads
    toast({
      title: "Welcome to सकल मराठा परिवार (SMP)",
      description: "Explore our website to learn about our mission and how you can get involved.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Impact />
        <Events />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
