
import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, 
  ShieldCheck, 
  Send,
  Download, 
  Component,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TechMvr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'MVR System', type: 'contact' });
    alert('Inquiry for MVR Evaporator received. Our ZLD team will contact you.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-[#020617] py-24 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/recycling" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Water Recycling Hub
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-5xl font-bold mb-6 heading-font">Mechanical Vapor Recompressor (MVR)</h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Energy-efficient evaporation for Zero Liquid Discharge (ZLD) systems, recovering pure water and valuable salts.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
                <img src="/images/MVR/MVR-Mechanical Vapor Recompressor.jpg" alt="MVR Carriers" className="w-full h-[450px] object-cover" />
              </div>

              {/* About Section */}
              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">About</h2>
                <p className="mb-6 text-justify">
                  In conventional evaporators, the energy content of the vapour stream produced is lost to a large extent or is only partially used. In comparison, mechanical vapour recompression permits the continuous recycling of this energy stream by recompressing the vapour to a higher pressure and therefore, a higher energy content. Instead of live steam, electric energy is used indirectly to heat the plant. Mechanical vapour recompression reduces the energy costs and the CO2 footprint and, consequently the environmental load.
                </p>
              </div>
            </div>
            {/* Sidebar Section */}
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Process</h3>
          </div>
          <div className='py-6'>
            <img
              src="/images/MVR/MVR Process Diagram.png"
              alt="MVR  Technology"
              className="w-3xl h-auto rounded-xl shadow-lg object-cover mx-auto block"
            />
          </div>

          <div className="text-slate-600 text-md leading-relaxed">
            <p className="mb-6 text-justify">
              When evaporating fluids, heat is transferred to the fluid to be evaporated. In industrial-scale applications, this process indirectly takes place via an evaporator that is used as a heat exchanger. This heat is used to heat the fluid and finally to evaporate the solvent (in most cases water). Evaporation Technology Using Mechanical Vapour Recompression Multiple-effect arrangement A Product to be evaporated B Vapour C Concentrate D Heating steam F Heating steam condensate G Vapour condensate Heat flow diagram of a double effect, directly heated evaporator Decrease of the specific steam consumption in % and increase of the total heating surface oF depending on the number of effects The heat flow of a single-effect evaporator shows that the thermal energy included in the vapour (enthalpy) must be about the same as that of the thermal input on the heating side. For the normal case of water evaporation, you can produce 1 kg/h of vapour with 1 kg/h of live steam since the specific evaporation heat is about the same on the product side as on the heating side. In this way, the concentration of the non-volatile substances in the fluid is increased. The evaporated solvent is referred to as vapour. Thus, the produced vapour contains approximately the same thermal energy as the used heating steam, however, at a lower pressure and temperature level. During condensation, this thermal energy has to be dissipated again. By using the vapour produced as heating steam in a second effect, the energy requirement of the overall system will nearly halve. This principle can be continued over several effects in order to further improve the energy saving. The max. permissible heating temperature of the first effect and the lowest boiling temperature of the last effect result Different heat carriers can be used to heat the evaporator. Apart from hot water or thermo-oil, water steam is used in most of the cases which condenses on the heating side of the evaporator and which dissipates its condensation heat on the evaporation side
            </p>
          </div>
        </div>
      </section>









      {/* Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">Low energy costs, since only a fraction of the evaporation energy has to be used in the form of electrical energy.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">Normally only electrical energy is required as an energy source.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">Normally no steam is required in normal operation, but only for starting up.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">No cooling water is required for vapour condensation.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">Suitable for various applications.</p>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="w-7 h-7 text-green-500 mr-3" />
                  <p className="text-slate-600 text-md">Retrofitting in existing plants is possible.</p>
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
              { title: "Industrial Painting Processes", text: "Treats degreasing, phosphating, passivation baths, wash water, and ion-exchange resin effluent." },
              { title: "Metalworking & Auto Parts Industry", text: "Removes oils, greases, metals, and machining contaminants from process wastewater." },
              { title: "Die Casting & Light Alloy Processing", text: "Separates demoulding fluids, glycols, and oil emulsions with high efficiency." },
              { title: "Chemical Industry – Reactor Washing", text: "Handles aggressive cleaning effluent with reliable contaminant removal." },
              { title: "Leachate at MSW Landfills", text: "Treats high-strength leachate with complex organic and inorganic contaminants." },
              { title: "Power Plant WTP Reject Streams", text: "Manages RO and DM plant reject water for improved recovery and compliance." },
              { title: "High-Oil & High-Salinity Water", text: "Removes oils, heavy metals, dissolved salts, brine, and emulsified contaminants." },
              { title: "Contaminated Water with Hydrocarbons", text: "Separates dissolved oils, hydrocarbons, and suspended mixtures from polluted water." }

            ].map((app, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <Component className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-slate-900 leading-tight">
                    {app.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{app.text}</p>
              </div>
            ))}
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
            <Link to="/technology/a-pro-daf" className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all group">
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">A-Pro (DAF)</h4>
              <p className="text-slate-500 text-xs">Dissolve Air Flotation System for heavy solids removal.</p>
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

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-6 heading-font">Ready to Upgrade Your Pre-Treatment?</h3>
                <p className="text-blue-200 mb-10 leading-relaxed">
                  Connect with our process engineers to receive a customized AMBBR proposal including flow rate analysis and footprint estimates.
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

    </div>
  );
};

export default TechMvr;
