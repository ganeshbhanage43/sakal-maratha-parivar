import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Users, Mail } from 'lucide-react';
const CTA: React.FC = () => {
  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">सामील व्हा</h2>
          <p className="text-gray-600 text-lg">
            There are many ways you can support our mission and make a difference in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Donate Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-secondary">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              Your financial support helps us continue our mission and expand our impact in the community.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary-light w-full">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-primary">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Volunteer With Us</h3>
            <p className="text-gray-600 mb-6">
              Join our team of dedicated volunteers and help make a direct impact in our community programs.
            </p>
            <Button asChild className="w-full">
              <Link to="/join">Join Us</Link>
            </Button>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-accent">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              Have questions or want to learn more about our programs? Get in touch with our team.
            </p>
            <Button asChild variant="outline" className="w-full hover:bg-accent hover:text-white hover:border-accent">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;