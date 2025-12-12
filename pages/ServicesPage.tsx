import React, { useEffect } from 'react';
import ProgramModel from '../components/ProgramModel';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Services & Program Model</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just provide "guards." We implement a holistic safety program that integrates seasoned professionals into your community fabric.
          </p>
        </div>

        {/* Program Model Diagram */}
        <div className="mb-20">
            <ProgramModel />
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
                <img 
                    src="https://picsum.photos/800/600?random=20" 
                    alt="Officer planning with school staff" 
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-sap-navy mb-6">What We Provide</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <span className="text-green-600 font-bold text-sm">✓</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">On-Site Safety Presence</h4>
                            <p className="text-slate-600">Uniformed or plain-clothes professionals providing deterrence and rapid response capabilities.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <span className="text-green-600 font-bold text-sm">✓</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Safety Audits & Planning</h4>
                            <p className="text-slate-600">Comprehensive review of your facility's perimeter, access points, and emergency protocols.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <span className="text-green-600 font-bold text-sm">✓</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Mentorship & Engagement</h4>
                            <p className="text-slate-600">Officers act as positive role models, building trust with students and congregants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Call to Action Triage */}
        <div className="bg-sap-navy rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Community?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you need support or want to provide it, the first step is a conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/get-involved?type=support">
                    <Button variant="secondary" size="lg">Request Support</Button>
                </Link>
                <Link to="/get-involved?type=volunteer">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sap-navy">
                        Volunteer Now
                    </Button>
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;