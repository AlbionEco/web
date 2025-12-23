
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechMbr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'MBR System', type: 'contact' });
    alert('Inquiry for MBR technology received. Technical specs sent to email.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
          </Link>
          <div className="max-w-4xl">
            <div className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Engineering Core</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">X-Flocs (MBR System)</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Integrating advanced biological treatment with membrane filtration to produce the highest quality reclaimed water for industrial and urban reuse.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
              <img src="/images/X-flocs-MBR/MBR.png" alt="MBR System" className="w-full h-[500px] object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 heading-font">Tech Specs</h3>
                <ul className="space-y-4">
                  {['Pore size: 0.03 - 0.1 microns', 'Output Turbidity < 0.2 NTU', 'Complete Pathogen Removal', 'Automated CIP cycles'].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 p-10 rounded-3xl text-white">
                <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="text-slate-900 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-6 heading-font">ROI Benefits</h3>
                <ul className="space-y-4">
                  {['50% Reduction in Footprint', 'Direct feed to RO systems', 'Low Sludge Generation', 'Govt Norms Guaranteed'].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300 text-sm font-medium">
                      <ShieldCheck className="w-4 h-4 text-blue-400 mr-3 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Advanced Biological Filtration</h2>
              <p className="mb-6">
                The X-Flocs MBR system eliminates the need for secondary clarifiers and tertiary filtration stages. By maintaining high MLSS concentrations (up to 12,000 mg/L), the bioreactor efficiency is tripled compared to conventional activated sludge processes.
              </p>
              <p>
                Our proprietary control algorithms ensure that the membrane flux is maintained at optimal levels, significantly extending membrane life and reducing chemical consumption for cleaning.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white border-2 border-slate-100 shadow-2xl rounded-[2.5rem] p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">Get Technical Specs</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Request Data Sheet
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMbr;
