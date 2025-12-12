import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustPoints from '../components/TrustPoints';
import DecisionFork from '../components/DecisionFork';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <TrustPoints />
      
      <DecisionFork />
      
      {/* Mini About Section teaser */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img 
                    src="https://picsum.photos/600/400?random=15" 
                    alt="Community meeting" 
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-sap-navy mb-4">Integrity. Service. Compassion.</h2>
                <p className="text-lg text-slate-600 mb-6">
                    We believe that the skills honed in service to our country are invaluable assets to our communities. SAP provides a structure for these professionals to continue their mission of protection at home.
                </p>
                <Link to="/about-us">
                    <Button variant="outline" className="gap-2">
                        Learn About Our Mission <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;