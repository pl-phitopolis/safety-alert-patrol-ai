import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-sap-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1920/1080?random=10"
          alt="Retired officer high-fiving a student"
        />
        <div className="absolute inset-0 bg-sap-navy/90 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Bridging Experience with <span className="text-sap-gold">Community Safety</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Safety Alert Patrol (SAP) connects retired military and law enforcement professionals with schools and churches to provide vetted, trusted protection and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/get-involved?type=support">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Request Support
              </Button>
            </Link>
            <Link to="/get-involved?type=volunteer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-sap-navy">
                Join as Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;