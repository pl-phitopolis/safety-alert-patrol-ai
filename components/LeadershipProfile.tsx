import React from 'react';
import { LEADERSHIP_TEAM } from '../constants';

const LeadershipProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {LEADERSHIP_TEAM.map((member, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-64 w-full bg-slate-200 relative">
             <img 
              src={member.imageUrl} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-sap-gold font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadershipProfile;