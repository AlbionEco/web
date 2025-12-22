
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechAfm: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'AFM Filtration', type: 'contact' });
    alert('Request for AFM Technical Data received.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/recycling" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Treatments
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Activated Filtration Media (AFM)</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              High-performance, bio-resistant filtration media outperforming traditional sand filters by 100%.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-3xl p-12 mb-16 border border-slate-100 shadow-inner">
               <h3 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Why Albion AFM?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex space-x-4">
                    <div className="bg-blue-600 p-3 rounded-xl h-fit"><Waves className="text-white w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">1-Micron Clarity</h4>
                      <p className="text-sm text-slate-500">Filtration down to 1 micron without additional chemical coagulation.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="bg-blue-600 p-3 rounded-xl h-fit"><ShieldCheck className="text-white w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Anti-Biofouling</h4>
                      <p className="text-sm text-slate-500">Self-sterilizing surface prevents bacterial growth and channeling.</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Technical Profile</h2>
              <p className="mb-6 leading-relaxed">
                Traditional sand filters support a large biofilm which leads to "channeling" where water bypasses the media. Albion AFM's negative surface charge and catalytic properties ensure it never bio-fouls, providing consistent results for life.
              </p>
              <ul className="space-y-4 mt-8">
                {['Double the life of standard sand', 'Reduces backwash water usage by 50%', 'Superior heavy metal removal', 'Prevents trichloramine formation'].map((val, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 heading-font">Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-blue-400 text-white" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-blue-400 text-white" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Request Data Sheet
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAfm;
