
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechAmbbr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'AMBBR System', type: 'contact' });
    alert('Inquiry for AMBBR expert consultation received.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-[#020617] py-24 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">M-Flocs (AMBBR)</h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Next-gen biological treatment utilizing proprietary high-surface-area carriers to maximize bacterial growth in minimal tank volumes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src="public/Images/M-flocs AMBBR/AMBBR.png" alt="AMBBR Carriers" className="w-full h-[450px] object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <Activity className="text-blue-600 w-10 h-10 mb-6" />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Process Stability</h4>
                <p className="text-slate-600 text-sm">Biofilm technology handles 3x more organic load than conventional ASP with superior shock resistance.</p>
              </div>
              <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl">
                <Target className="text-blue-400 w-10 h-10 mb-6" />
                <h4 className="text-xl font-bold mb-4">Modular Retrofitting</h4>
                <p className="text-slate-400 text-sm">Ideal for increasing the capacity of existing ETP/STP plants without new civil construction.</p>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">The M-Flocs Advantage</h2>
              <p className="mb-6">
                M-Flocs (Advanced MBBR) is the result of years of R&D into biomass attachment kinetics. By using specialized media with optimized protected surface areas, we achieve rapid nitrification and BOD removal.
              </p>
              <ul className="space-y-4">
                {['No clogging or head-loss issues', 'Low maintenance - no sludge return required', 'Continuous biofilm renewal process', 'Compact footprint for urban sites'].map((v, i) => (
                  <li key={i} className="flex items-center font-bold text-slate-800"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> {v}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white border-2 border-blue-600/20 rounded-[2rem] p-10 shadow-2xl sticky top-32">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                   <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600" required />
                   <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600" required />
                   <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all">
                      Speak with an Engineer
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAmbbr;
