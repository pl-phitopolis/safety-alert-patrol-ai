import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const GetInvolvedPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info & Context */}
            <div>
                <h1 className="text-4xl font-extrabold text-sap-navy mb-6">Get Involved</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    We are building a coalition of protectors and partners. Your inquiry is the first step towards a safer community. 
                </p>

                <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="bg-sap-light p-3 rounded-lg">
                            <Mail className="h-6 w-6 text-sap-navy" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Email Us</h3>
                            <p className="text-slate-600">info@safetyalertpatrol.org</p>
                            <p className="text-xs text-slate-500 mt-1">Response time: 24-48 hours</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-sap-light p-3 rounded-lg">
                            <Phone className="h-6 w-6 text-sap-navy" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Call Us</h3>
                            <p className="text-slate-600">(555) 123-4567</p>
                            <p className="text-xs text-slate-500 mt-1">Mon-Fri, 9am - 5pm EST</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-sap-light p-3 rounded-lg">
                            <MapPin className="h-6 w-6 text-sap-navy" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">Headquarters</h3>
                            <p className="text-slate-600">123 Safety Way, Suite 100<br/>Community City, ST 12345</p>
                        </div>
                    </div>
                </div>

                {/* Future Proofing: Ways to Give Placeholder */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                        <h3 className="text-lg font-bold text-slate-900">Support the Mission</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        Safety Alert Patrol relies on the generosity of donors to vet, train, and equip our volunteers.
                    </p>
                    <button disabled className="px-4 py-2 bg-slate-100 text-slate-400 font-semibold rounded cursor-not-allowed text-sm">
                        Donation Portal Coming Soon
                    </button>
                </div>
            </div>

            {/* Right Column: Form */}
            <div>
                <ContactForm />
            </div>

        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;