import React from 'react';
import { TRUST_POINTS } from '../constants';

const TrustPoints: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {TRUST_POINTS.map((point, index) => (
            <div key={index} className="px-4 py-4">
              <div className="text-4xl font-extrabold text-sap-navy mb-2">{point.value}</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">{point.label}</div>
              <p className="text-sm text-slate-500">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Placeholder for Partners */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted By Community Partners</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simulating Logos */}
             <div className="h-10 w-32 bg-slate-300 rounded animate-pulse"></div>
             <div className="h-10 w-32 bg-slate-300 rounded animate-pulse"></div>
             <div className="h-10 w-32 bg-slate-300 rounded animate-pulse"></div>
             <div className="h-10 w-32 bg-slate-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;