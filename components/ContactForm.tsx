import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const location = useLocation();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'volunteer',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    if (typeParam) {
        setFormData(prev => ({...prev, type: typeParam}));
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after success in a real app or redirect
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (formState === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">
          Your message has been received. A member of our team will reach out to you shortly to discuss next steps.
        </p>
        <Button 
            variant="outline" 
            className="mt-6" 
            onClick={() => {
                setFormState('idle'); 
                setFormData(prev => ({...prev, message: ''}));
            }}
        >
            Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        {formData.type === 'volunteer' ? 'Join the Mission' : 'Request Information'}
      </h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sap-navy focus:border-sap-navy"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sap-navy focus:border-sap-navy"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">I am interested in...</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sap-navy focus:border-sap-navy"
          >
            <option value="volunteer">Volunteering (Retired Officer)</option>
            <option value="support">Requesting Support (School/Church)</option>
            <option value="partner">Partnership / Donation</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sap-navy focus:border-sap-navy"
            placeholder="Tell us a bit about your background or your institution's needs..."
          />
        </div>

        <Button 
          type="submit" 
          disabled={formState === 'loading'}
          className="w-full justify-center mt-4"
        >
          {formState === 'loading' ? 'Sending...' : 'Submit Inquiry'}
        </Button>
        
        {formState === 'error' && (
             <p className="text-red-600 text-sm text-center mt-2">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;