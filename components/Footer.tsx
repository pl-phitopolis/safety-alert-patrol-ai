import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-sap-gold" />
              <span className="font-bold text-lg">SAP</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connecting retired military and law enforcement professionals with communities to foster safety, trust, and peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sap-gold font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Info */}
          <div className="col-span-1">
            <h3 className="text-sap-gold font-semibold mb-4 uppercase text-sm tracking-wider">Information</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-slate-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-slate-300 hover:text-white text-sm">Accessibility</Link></li>
              <li><Link to="/get-involved" className="text-slate-300 hover:text-white text-sm">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
             <h3 className="text-sap-gold font-semibold mb-4 uppercase text-sm tracking-wider">Connect</h3>
             <div className="flex space-x-4 mb-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
             </div>
             <div className="flex items-center gap-2 text-slate-300 text-sm">
               <Mail className="h-4 w-4" />
               <span>info@safetyalertpatrol.org</span>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Safety Alert Patrol. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for Community Safety.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;