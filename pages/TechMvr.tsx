
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Zap, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechMvr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'MVR System', type: 'contact' });
    alert('Inquiry for MVR Evaporator received. Our ZLD team will contact you.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/recycling" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Water Recycling Hub
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Mechanical Vapor Recompressor (MVR)</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Energy-efficient evaporation for Zero Liquid Discharge (ZLD) systems, recovering pure water and valuable salts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl mb-16 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" /> 80% Energy Savings
              </h3>
              <p className="text-blue-800/80">
                Unlike traditional multi-effect evaporators, MVR uses electrical power to compress vapor, recycling latent heat to drive the process with minimal external steam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-900 heading-font">Core Benefits</h4>
                {['Minimal Steam Consumption', 'Fully Automated PLC Control', 'Compact Vertical Footprint', 'Highest Salt Purity Recovery'].map((v, i) => (
                  <div key={i} className="flex items-center text-slate-600"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {v}</div>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-slate-900 heading-font">Engineering Features</h4>
                {['High-Speed Turbo Compressors', 'Falling Film Evaporation Tech', 'Corrosion-Proof Materials', 'Integrated Condensate Polishing'].map((v, i) => (
                  <div key={i} className="flex items-center text-slate-600"><ShieldCheck className="w-5 h-5 text-blue-600 mr-3" /> {v}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-slate-100 rounded-3xl p-10 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">ZLD Analysis</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-white outline-none border border-slate-200" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-white outline-none border border-slate-200" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <textarea placeholder="Effluent TDS Level (ppm)" className="w-full px-5 py-4 rounded-xl bg-white outline-none border border-slate-200" rows={4}></textarea>
                  <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Start Feasibility Study
                  </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMvr;
