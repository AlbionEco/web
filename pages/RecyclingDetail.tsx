
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Send, Mail, Download, ShieldCheck } from 'lucide-react';
import { WATER_RECYCLING_TREATMENTS } from '../constants';

interface RecyclingDetailProps {
  addLead: (lead: any) => void;
}

const RecyclingDetail: React.FC<RecyclingDetailProps> = ({ addLead }) => {
  const { id } = useParams<{ id: string }>();
  
  // Find item in either effluent or sewage
  const item = [...WATER_RECYCLING_TREATMENTS.effluent.items, ...WATER_RECYCLING_TREATMENTS.sewage.items]
    .find(i => i.id === id);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  if (!item) return <div className="py-24 text-center">Treatment Not Found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: item.name, type: 'contact' });
    alert("Thank you! An Albion engineer will reach out to you shortly.");
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/recycling" className="flex items-center text-blue-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Recycling Overview
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 heading-font">{item.name}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              High-performance {id === 'mbr' || id === 'sbr' || id === 'ambbr' || id === 'mbbr' ? 'sewage' : 'effluent'} treatment solution optimized for water reuse.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 heading-font">Technology Profile</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The {item.name} is one of Albion's flagship recovery modules. Designed specifically for Indian industrial and municipal conditions, it offers unparalleled robustness against fluctuating influent parameters.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-blue-900 uppercase tracking-widest text-xs">Core Advantages</h4>
                  {['99.9% Pathogen Removal', 'Zero Odor Operation', 'Minimal Operating Cost', 'Plug & Play Design'].map((adv, i) => (
                    <div key={i} className="flex items-center text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" /> {adv}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-blue-900 uppercase tracking-widest text-xs">Maintenance</h4>
                  {['Automated Backwash', 'Low Chemical Usage', 'Yearly Inspection Only', 'Remote Monitoring'].map((adv, i) => (
                    <div key={i} className="flex items-center text-slate-700 text-sm">
                      <ShieldCheck className="w-4 h-4 text-blue-500 mr-3" /> {adv}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600">
              <h3 className="heading-font text-slate-900">System Integration</h3>
              <p>
                Our engineers integrate this system as part of a multi-stage ZLD (Zero Liquid Discharge) plant. Depending on your needs, it can serve as a primary biological reactor or a secondary polishing unit. 
              </p>
              <p>
                Albion Ecotech provides full turnkey solutions, including site survey, civil design, equipment manufacturing, and long-term O&M (Operation and Maintenance).
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold mb-6 heading-font">Get Custom Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Request Consultation
                  </button>
                </form>
              </div>

              <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Download className="text-blue-600 w-5 h-5" />
                  <span className="font-bold text-slate-800">Download Datasheet</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Technical P&ID and GA drawings available for project managers.</p>
                <Link to="/downloads">
                <button className="text-blue-600 font-bold text-sm hover:underline">Get PDF Access</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingDetail;
