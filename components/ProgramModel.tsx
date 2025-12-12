import React from 'react';
import { PROGRAM_STEPS } from '../constants';
import * as Icons from 'lucide-react';

const ProgramModel: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-sap-navy mb-4">Our Program Model</h2>
        <p className="text-lg text-slate-600">
          A systematic approach ensuring high standards of safety, accountability, and seamless integration into your community environment.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PROGRAM_STEPS.map((step, index) => {
             // Dynamic Icon Rendering
             const IconComponent = (Icons as any)[step.iconName] || Icons.Shield;
             
             return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-sap-navy text-white rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
             );
          })}
        </div>
      </div>
      
      <div className="bg-sap-light p-6 rounded-lg border border-blue-100 mt-8">
        <h4 className="font-semibold text-sap-navy mb-2 flex items-center gap-2">
            <Icons.Info className="h-4 w-4" /> Note on Terminology
        </h4>
        <p className="text-sm text-slate-600">
            We use terms like <strong>"Vetting"</strong> to describe our rigorous background check process. Our <strong>"Strategic Placement"</strong> ensures that the retired officer's skills align perfectly with the specific culture of a school or church.
        </p>
      </div>
    </div>
  );
};

export default ProgramModel;