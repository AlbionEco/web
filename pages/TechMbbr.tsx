
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechMbbr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'MBBR System', type: 'contact' });
    alert('Thank you! Technical details for MBBR have been requested.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/recycling" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Treatments
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Moving Bed Bioreactor (MBBR)</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Robust biological treatment using high-density polyethylene carriers to maximize bacterial surface area and nutrient removal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Engineered Biological Robustness</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Albion's MBBR systems are designed for durability and ease of operation. By utilizing carriers that are kept in constant motion, we prevent dead-zones in the reactor and ensure maximum oxygen transfer efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-900 uppercase text-xs tracking-widest border-b pb-2">Technical Advantage</h4>
                {['No Sludge Recycling Needed', 'Highly Resistant to Toxic Spikes', 'Modular Scalability', 'Low Head-loss Design'].map((v, i) => (
                  <div key={i} className="flex items-center text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-green-500 mr-3" /> {v}</div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-blue-900 uppercase text-xs tracking-widest border-b pb-2">Best For</h4>
                {['Municipal Sewage STPs', 'Pulp & Paper Effluent', 'Retrofitting Old ASP Plants', 'Textile wastewater biological stage'].map((v, i) => (
                  <div key={i} className="flex items-center text-slate-700 font-medium"><ShieldCheck className="w-4 h-4 text-blue-600 mr-3" /> {v}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner sticky top-32">
                <h3 className="text-xl font-bold text-slate-900 mb-6 heading-font">Project Feasibility</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white outline-none" required />
                   <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg bg-white outline-none" required />
                   <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Request Quote
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMbbr;
