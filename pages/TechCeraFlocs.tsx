
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechCeraFlocs: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'Cera Flocs', type: 'contact' });
    alert('Inquiry for Ceramic Membrane technology received.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Core Technologies
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Cera Flocs (Ceramic MBR)</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Extreme durability filtration for high-temperature, oily, and chemically aggressive industrial effluents.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-100">
              <img src="public/Images/C-flocs Ceramic/ceramic.png" alt="Ceramic Membrane" className="w-full h-[500px] object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Year Lifespan</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90°C</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Temp Resistance</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">pH 0-14</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Chemical Range</div>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
               <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Material Science Excellence</h2>
               <p className="mb-6">
                 Unlike polymeric membranes that degrade in harsh environments, Cera Flocs ceramic membranes are virtually indestructible. They offer high-pressure backwash capability and can be cleaned with aggressive oxidizers.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                 <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 border-b pb-2">Industrial Applications</h4>
                    {['Heavy Metal Separation', 'Refinery Wastewater', 'Pharmaceutical ETP', 'High-Flux Reclaim'].map((v, i) => (
                      <div key={i} className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-blue-600 mr-3" /> {v}</div>
                    ))}
                 </div>
                 <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 border-b pb-2">Key Advantages</h4>
                    {['Zero Fiber Breakage', 'Extreme pH Tolerance', 'High Solids Handling', 'Minimum Pre-treatment'].map((v, i) => (
                      <div key={i} className="flex items-center text-sm"><ShieldCheck className="w-4 h-4 text-green-500 mr-3" /> {v}</div>
                    ))}
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-blue-600 rounded-3xl p-10 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-8 heading-font">Request Proposal</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none border border-white/20" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none border border-white/20" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCeraFlocs;
