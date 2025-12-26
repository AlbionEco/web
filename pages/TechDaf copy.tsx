
// import React, { useState } from 'react';
// import { ArrowLeft, CheckCircle, ShieldCheck, Send, FileText, Settings } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const TechDaf: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     addLead({ ...formData, interest: 'DAF System', type: 'contact' });
//     alert('Thank you! Technical specifications have been requested.');
//     setFormData({ name: '', email: '', phone: '', company: '' });
//   };

//   return (
//     <div className="bg-white">
//       <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
//             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
//           </Link>
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">A-PRO Dissolved Air Floatation System (DAF) System</h1>
//             <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
//               Advanced Dissolved Air Flotation technology for ultra-high efficiency removal of oils, greases, and suspended solids from industrial effluent.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//           <div className="lg:col-span-2">
//             <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
//               <img src="/images/A-pro-DAF/DAF.png" alt="DAF System Rendering" className="w-full h-[500px] object-cover" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
//               <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
//                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                   <Settings className="text-white w-6 h-6" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6 heading-font">Engineering Specs</h3>
//                 <ul className="space-y-4">
//                   {['Micro-bubble Tech (20-50μm)', 'Circular & Rectangular Designs', 'Hydraulic load up to 15 m/h', 'Automated Sludge Removal'].map((item, i) => (
//                     <li key={i} className="flex items-start text-slate-600 text-sm font-medium">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-slate-900 p-10 rounded-3xl text-white">
//                 <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
//                   <FileText className="text-slate-900 w-6 h-6" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 heading-font">Core Performance</h3>
//                 <ul className="space-y-4">
//                   {['99.5% Oil & Grease Removal', 'Low Energy Saturator Pump', 'AISI 304/316 SS Construction', 'Plug & Play Commissioning'].map((item, i) => (
//                     <li key={i} className="flex items-start text-slate-300 text-sm font-medium">
//                       <ShieldCheck className="w-4 h-4 text-blue-400 mr-3 shrink-0 mt-0.5" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div>
//               <h1>Hello</h1>
//             </div>

//             <div className="prose prose-lg text-slate-600 max-w-none">
//               <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Operation Philosophy</h2>
//               <p className="mb-6">
//                 The Albion A-PRO DAF system introduces a revolutionary air-saturator design that allows for higher dissolved air concentrations at lower power consumption. By injecting millions of micro-bubbles into the wastewater stream, lightweight particles like emulsified oils and microscopic flocs are floated to the surface with extreme precision.
//               </p>
//               <p>
//                 Our control systems monitor turbidity in real-time, adjusting the air-to-solids ratio automatically. This ensures consistent effluent quality even during significant influent surges.
//               </p>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="sticky top-32">
//               <div className="bg-white border-2 border-slate-100 shadow-2xl rounded-[2.5rem] p-10">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">Technical Enquire</h3>
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
//                   <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
//                   <input type="tel" placeholder="Phone" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
//                   <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
//                     <Send className="w-4 h-4 mr-2" /> Request Data Sheet
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechDaf;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Settings,
  Zap,
  Droplets,
  Wind,
  CheckCircle2,
  Layers,
  ShieldCheck,
  ArrowRight,
  Download,
  Send,
  Component,
  Microscope,
  CheckCircle,
  FileText
} from 'lucide-react';

interface TechDafProps {
  addLead: (lead: any) => void;
}

const TechDaf: React.FC<TechDafProps> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'A-PRO DAF System', type: 'contact' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      alert("Technical inquiry received. An Albion specialist will contact you with the DAF technical dossier.");
    }, 1000);
  };

  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">A-PRO Dissolved Air Floatation System (DAF) System</h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Advanced Dissolved Air Flotation technology for ultra-high efficiency removal of oils, greases, and suspended solids from industrial effluent.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
                <img src="/images/A-pro-DAF/DAF.png" alt="DAF System Rendering" className="w-full h-[500px] object-cover" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Settings className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 heading-font">Engineering Specs</h3>
                  <ul className="space-y-4">
                    {['Micro-bubble Tech (20-50μm)', 'Circular & Rectangular Designs', 'Hydraulic load up to 15 m/h', 'Automated Sludge Removal'].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-10 rounded-3xl text-white">
                  <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="text-slate-900 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 heading-font">Core Performance</h3>
                  <ul className="space-y-4">
                    {['99.5% Oil & Grease Removal', 'Low Energy Saturator Pump', 'AISI 304/316 SS Construction', 'Plug & Play Commissioning'].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-300 text-sm font-medium">
                        <ShieldCheck className="w-4 h-4 text-blue-400 mr-3 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h1>Hello</h1>
              </div>

              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Operation Philosophy</h2>
                <p className="mb-6">
                  The Albion A-PRO DAF system introduces a revolutionary air-saturator design that allows for higher dissolved air concentrations at lower power consumption. By injecting millions of micro-bubbles into the wastewater stream, lightweight particles like emulsified oils and microscopic flocs are floated to the surface with extreme precision.
                </p>
                <p>
                  Our control systems monitor turbidity in real-time, adjusting the air-to-solids ratio automatically. This ensures consistent effluent quality even during significant influent surges.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white border-2 border-slate-100 shadow-2xl rounded-[2.5rem] p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">Technical Enquire</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    <input type="email" placeholder="Work Email" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    <input type="tel" placeholder="Phone" className="w-full px-5 py-4 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-600" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
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

      {/* Engineering Specs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Technical Overview</h2>
            <h3 className="text-4xl font-bold text-slate-900 heading-font">High-Performance Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wind,
                title: "Micro-Bubble Tech",
                desc: "Proprietary air-dissolving tube generating bubbles (20-50 microns) for maximum particle attachment."
              },
              {
                icon: Zap,
                title: "Low Energy Draw",
                desc: "Optimized pump curves and saturation tank design reducing operational costs by up to 30%."
              },
              {
                icon: Layers,
                title: "Compact Design",
                desc: "Modular footprint allows for installation in space-constrained industrial utility rooms."
              },
              {
                icon: ShieldCheck,
                title: "Material Integrity",
                desc: "Standard SS304/SS316L construction with specialized epoxy coatings for corrosive environments."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Process Engineering Principle</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Air Saturation</h5>
                    <p className="text-slate-600 text-sm">Recycled effluent is pressurized and saturated with air in a high-efficiency saturation vessel.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Pressure Release</h5>
                    <p className="text-slate-600 text-sm">The air-saturated water is released into the DAF tank through proprietary Albion nozzles, forming a dense micro-bubble cloud.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Floatation & Skimming</h5>
                    <p className="text-slate-600 text-sm">Suspended solids attach to bubbles and rise to the surface. A mechanical chain-skimmer removes the sludge blanket.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Clarified Effluent</h5>
                    <p className="text-slate-600 text-sm">Clear water is drawn from the bottom for secondary treatment or reuse, while heavy solids settle in the conical bottom.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-2xl">
              <div className="bg-blue-600/20 p-8 rounded-full inline-block mb-8">
                <Microscope className="w-16 h-16 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Laboratory Validated</h4>
              <p className="text-blue-200/60 text-sm mb-8">
                Every A-PRO DAF system is custom-configured based on Albion's JAR testing protocols to ensure 100% chemical-dose optimization.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xl font-bold">20-50μ</div>
                  <div className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">Bubble Size</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xl font-bold">PLC</div>
                  <div className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">Automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Industrial Use-Cases</h2>
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Optimized for Diverse Sectors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dairy & Food Processing", text: "Exceptional at removing fats, oils, and greases (FOG) typical in dairy wastewater." },
              { title: "Pulp & Paper Mills", title2: "Fiber Recovery", text: "Effective in recovering valuable pulp fibers while reducing effluent TSS load." },
              { title: "Oil & Gas Refineries", text: "Primary oil-water separation for produced water and refinery effluent streams." }
            ].map((app, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center text-blue-600 mb-6">
                  <Component className="w-6 h-6 mr-3" />
                  <span className="font-bold uppercase tracking-widest text-xs">Sector {idx + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{app.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{app.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 heading-font">Ready to Upgrade Your Pre-Treatment?</h3>
                <p className="text-blue-200 mb-10 leading-relaxed">
                  Connect with our process engineers to receive a customized DAF proposal including flow rate analysis and footprint estimates.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4" />
                    <span className="font-medium">Water Sample Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4" />
                    <span className="font-medium">Technical Drawing (CAD/P&ID) Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4" />
                    <span className="font-medium">ZLD Compliance Feasibility Study</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12 lg:p-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Company</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Message / Flow Requirements</label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center">
                    <Send className="w-5 h-5 mr-3" /> Submit Engineering Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tech Links */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 heading-font">Other Technologies</h3>
            <Link to="/technologies" className="text-blue-600 font-bold flex items-center hover:underline">
              Explore All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/technology/m-flocs" className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all group">
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">M-Flocs (AMBBR)</h4>
              <p className="text-slate-500 text-xs">Moving Bed Biofilm Reactor for high-rate biological treatment.</p>
            </Link>
            <Link to="/technology/x-flocs" className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all group">
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">X-Flocs (MBR)</h4>
              <p className="text-slate-500 text-xs">Advanced Membrane Bioreactor for high-purity effluent reuse.</p>
            </Link>
            <Link to="/membranes" className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all group">
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">Membrane Solutions</h4>
              <p className="text-slate-500 text-xs">UF, RO, and specialized industrial filtration membranes.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechDaf;
