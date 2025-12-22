
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechSbr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'SBR System', type: 'contact' });
    alert('Thank you! Inquiry for SBR System received.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/recycling" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Sewage Solutions
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Sequencing Batch Reactor (SBR)</h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
            Automated batch biological treatment combining equalization, aeration, and clarification in a single high-efficiency basin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white mb-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl"></div>
               <h3 className="text-2xl font-bold mb-6 heading-font">Precision Cycle Management</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <div className="flex items-center font-bold text-blue-400"><Clock className="w-5 h-5 mr-3" /> Timed Phases</div>
                     <p className="text-sm text-slate-400">Programmable logic controls Fill, React, Settle, and Decant phases with 100% precision.</p>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center font-bold text-blue-400"><Filter className="w-5 h-5 mr-3" /> Smart Decanting</div>
                     <p className="text-sm text-slate-400">Mechanical decanters ensure clear supernatant removal with zero sludge carryover.</p>
                  </div>
               </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Why Choose SBR for Urban Sewage?</h2>
              <p className="mb-6 leading-relaxed">
                The Albion SBR process is ideal for high-density residential and commercial projects where land area is limited. By performing all treatment steps in one tank, we reduce civil costs by up to 40% compared to traditional ASP.
              </p>
              <ul className="space-y-4 mt-8">
                {['Fully automated sludge age control', 'No external clarifiers required', 'Superior nutrient removal (N&P)', 'Odorless operation for urban settings'].map((val, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 sticky top-32">
                <h3 className="text-xl font-bold text-slate-900 mb-6 heading-font">Project Feasibility</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                   <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200" required />
                   <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200" required />
                   <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold hover:bg-blue-700 transition-all">
                      Speak with an Expert
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSbr;
