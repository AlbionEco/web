
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Download, Send, ShieldCheck, FileText, Settings, AlertCircle } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

interface TechDetailProps {
  addLead: (lead: any) => void;
}

const TechnologyDetail: React.FC<TechDetailProps> = ({ addLead }) => {
  const { id } = useParams<{ id: string }>();
  
  // Handle Aliases from Recycling paths
  const lookupId = id === 'daf' ? 'a-pro-daf' : 
                   id === 'ambbr' ? 'm-flocs' : 
                   id === 'mbr' ? 'x-flocs' : 
                   id === 'cera-flocs' ? 'c-flocs' : 
                   id === 'uf' ? 'u-flocs' : id;

  const tech = TECHNOLOGIES.find(t => t.id === lookupId);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tech) {
    return (
      <div className="py-24 text-center bg-slate-50 min-h-screen">
        <h2 className="text-2xl font-bold text-slate-900">Module Profile Not Found</h2>
        <Link to="/technologies" className="text-blue-600 mt-4 inline-block font-bold hover:underline">Return to Hub</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: tech.name, type: 'brochure' });
    alert(`Thank you! Technical specifications for ${tech.name} have been requested.`);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/recycling" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
          </Link>
          <div className="max-w-4xl">
            <div className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Engineering Core</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font leading-tight">{tech.name}</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              {tech.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
              <img src={tech.image} alt={tech.name} className="w-full h-[500px] object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 heading-font">Core Advantages</h3>
                <ul className="space-y-4">
                  {tech.features.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 p-10 rounded-3xl text-white">
                <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="text-slate-900 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-6 heading-font">Maintenance & Ops</h3>
                <ul className="space-y-4">
                  {tech.applications.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300 text-sm font-medium">
                      <AlertCircle className="w-4 h-4 text-blue-400 mr-3 shrink-0 mt-0.5" /> Optimized for: {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Technology Philosophy</h2>
              <p className="mb-6 leading-relaxed">
                {tech.fullContent}
              </p>
              <div className="p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl my-10">
                <h4 className="font-bold text-blue-900 mb-2">Technical Note:</h4>
                <p className="text-blue-800/80 text-sm">
                  Albion Ecotech provides full turnkey integration for this module, including P&ID development, site civil requirements, and long-term Operation & Maintenance (O&M) contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white border-2 border-slate-100 shadow-2xl rounded-[2.5rem] p-10">
                <div className="flex items-center mb-8">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900 heading-font">Technical Specs</h3>
                </div>
                <p className="text-sm text-slate-500 mb-8">
                  Enter your details to receive the full technical data-sheet and GA drawings for the {tech.shortName} system.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none border border-transparent focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all" 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                  <input 
                    type="email" 
                    placeholder="Professional Email" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none border border-transparent focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                  <input 
                    type="tel" 
                    placeholder="Contact Number" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none border border-transparent focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                  <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Send className="w-4 h-4 mr-2" /> Request Data Sheet
                  </button>
                </form>
              </div>

              <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Download className="text-blue-600 w-5 h-5" />
                  <span className="font-bold text-slate-800">Project Case Study</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Read how we achieved 95% recovery for a similar industrial site using this tech.</p>
                {/* add link to= /downloads */}
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

export default TechnologyDetail;
