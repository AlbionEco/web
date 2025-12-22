
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Zap, Droplets, Target, ArrowUpRight } from 'lucide-react';
import { MEMBRANE_TYPES } from '../constants';

const MembraneOverview: React.FC = () => {
  const blufoxLink = "https://www.blufoxmembranes.com";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Albion & BluFox</h1>
          <p className="text-2xl text-blue-400 font-bold mb-8">Excellence in Membrane Filtration</p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Albion Ecotech is proud to partner with BluFox Membranes to bring the world's most advanced hollow-fiber and ceramic filtration technologies to the Indian industrial market.
          </p>
          <a 
            href={blufoxLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 group"
          >
            Explore BluFox Technical Catalog <ExternalLink className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Product List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Product Range</h2>
            <h3 className="text-4xl font-bold text-slate-900 heading-font mb-6 leading-tight">Superior Membrane Systems</h3>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              We offer a complete range of membranes for MBR, UF, and RO processes, including the world-renowned Sumitomo Poreflon series.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">Industry Benchmark</span>
              </div>
              <p className="text-sm text-slate-500 italic">"Our membrane systems are tested for high-flux durability in the harshest pharmaceutical and textile effluents."</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEMBRANE_TYPES.map((name, i) => (
              <a 
                key={i} 
                href={blufoxLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-600 transition-all group relative overflow-hidden"
              >
                <div className="absolute -bottom-4 -right-4 bg-blue-50 w-24 h-24 rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{name}</h4>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-tighter">View Specs on BluFox site</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white text-center shadow-2xl shadow-blue-600/30">
          <h2 className="text-4xl font-bold mb-8 heading-font">Need technical advice on membrane selection?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Albion's process engineers help you identify the optimal membrane material and pore size for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Consult Albion Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembraneOverview;
