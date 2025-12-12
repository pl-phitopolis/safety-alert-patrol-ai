import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, HandHeart } from 'lucide-react';

const DecisionFork: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How Can We Help You?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you are looking to serve your community or looking for protection for your institution, we have a pathway for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Engagement Funnel */}
          <Link 
            to="/get-involved?type=volunteer"
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50 p-8 hover:border-sap-navy hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="h-16 w-16 bg-sap-navy rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <HandHeart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-sap-navy transition-colors">I Want to Serve</h3>
            <p className="text-slate-600 mb-6">
              Join a team of retired professionals dedicated to protecting our future. Volunteer your skills and experience.
            </p>
            <span className="text-sap-navy font-semibold group-hover:underline">Join the Mission &rarr;</span>
          </Link>

          {/* Service Funnel */}
          <Link 
            to="/get-involved?type=support"
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50 p-8 hover:border-sap-gold hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
          >
             <div className="h-16 w-16 bg-sap-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <ShieldAlert className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">I Need Protection</h3>
            <p className="text-slate-600 mb-6">
              Request professional, vetted safety support for your school or place of worship. Secure your community today.
            </p>
             <span className="text-yellow-600 font-semibold group-hover:underline">Request Support &rarr;</span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default DecisionFork;