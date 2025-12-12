import React, { useEffect } from 'react';
import LeadershipProfile from '../components/LeadershipProfile';
import { Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-sap-light rounded-full mb-6">
            <Shield className="h-8 w-8 text-sap-navy" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Mission & Values</h1>
          <p className="text-xl text-slate-600">
            Safety Alert Patrol exists to connect the disciplined experience of retired professionals with the safety needs of our most cherished institutions.
          </p>
        </div>

        {/* Mission/Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-sap-navy mb-4">The Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To provide schools and churches with a visible, professional, and reassuring safety presence by mobilizing retired military and law enforcement personnel. We aim to deter threats, mentor youth, and foster a culture of safety through community collaboration.
            </p>
          </div>
          <div className="bg-sap-navy p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-sap-gold h-2 w-2 mt-2 rounded-full flex-shrink-0"></span>
                <span><strong>Integrity:</strong> Uncompromising adherence to moral and ethical principles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sap-gold h-2 w-2 mt-2 rounded-full flex-shrink-0"></span>
                <span><strong>Service:</strong> A lifelong commitment to the well-being of others.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sap-gold h-2 w-2 mt-2 rounded-full flex-shrink-0"></span>
                <span><strong>Vigilance:</strong> Professional awareness that prevents harm before it occurs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sap-gold h-2 w-2 mt-2 rounded-full flex-shrink-0"></span>
                <span><strong>Compassion:</strong> Protecting with a heart for the community we serve.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Leadership Team</h2>
            <LeadershipProfile />
        </div>

         {/* Governance Note */}
         <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-sm text-slate-500">
                Safety Alert Patrol is governed by a Board of Directors comprised of community leaders, safety experts, and educational administrators to ensure transparency and accountability.
            </p>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;