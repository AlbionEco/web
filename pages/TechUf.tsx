
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechUf: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'UF System', type: 'contact' });
    alert('Request for UF technical specifications received.');
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-[#0f172a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Core Tech
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">U-Flocs (UF System)</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            High-performance Hollow Fiber Ultrafiltration systems designed for absolute water clarification and RO pre-treatment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-100">
              <img src="public/Images/U-flocs UF/UF.png" alt="UF Membranes" className="w-full h-[500px] object-cover" />
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Unrivaled Permeate Clarity</h2>
              <p className="mb-6">
                The U-Flocs system provides a physical barrier down to 0.01 microns, effectively removing viruses, bacteria, and macromolecules. This ensures consistent effluent turbidity below 0.1 NTU, regardless of source variations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-16">
                <div className="p-8 bg-slate-50 rounded-3xl">
                   <h4 className="font-bold text-blue-900 uppercase text-xs mb-4 tracking-widest">Engineering Specs</h4>
                   <ul className="space-y-3 text-sm">
                      <li>• Membrane Material: Modified PVDF</li>
                      <li>• Nominal Pore Size: 0.02 Microns</li>
                      <li>• High Chemical & Chlorine Resistance</li>
                      <li>• Outside-In Filtration for easier cleaning</li>
                   </ul>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl">
                   <h4 className="font-bold text-blue-900 uppercase text-xs mb-4 tracking-widest">Primary Uses</h4>
                   <ul className="space-y-3 text-sm">
                      <li>• Multi-Barrier RO Pre-treatment</li>
                      <li>• Surface & Well Water Clarification</li>
                      <li>• Tertiary Sewage Polishing for Reuse</li>
                      <li>• Cooling Tower Makeup Water</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-blue-900 text-white rounded-3xl p-10 shadow-2xl sticky top-32">
                <h3 className="text-2xl font-bold mb-6 heading-font">Enquire Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none" required />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-white/10 outline-none" required />
                  <button type="submit" className="w-full bg-blue-600 py-5 rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center shadow-lg">
                    <Send className="w-4 h-4 mr-2" /> Request Brochure
                  </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechUf;
