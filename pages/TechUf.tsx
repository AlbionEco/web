
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Layers, Zap, Download, CheckCircle2, Component, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechUf: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'UF System', type: 'contact' });
    alert('Request for UF technical specifications received.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };


  const images = [
    "/images/U-flocs-UF/UF Imafes 1.png",
    "/images/U-flocs-UF/UF Imafes 2.png",
    "/images/U-flocs-UF/UF Imafes 3.png",
    "/images/U-flocs-UF/UF Imafes 4.png"
  ];


  const [activeImage, setActiveImage] = useState<string | null>(null);


  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Core Tech
            </Link>
            <h1 className="text-5xl md:text-5xl font-bold mb-6 heading-font">U-Flocs Ultrafiltration System</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              High-performance Hollow Fiber Ultrafiltration systems designed for absolute water clarification and RO pre-treatment.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <img src="/images/U-flocs-UF/u-flocs Technology Logo.png" alt="" className='w-auto h-[80px] object-cover' />

              <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-100">
                <img src="/images/U-flocs-UF/UF.png" alt="UF Membranes" className="w-full h-[500px] object-cover" />
              </div>

              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">About</h2>
                <p className="mb-6 text-justify">
                  U-Flocs is a UF membrane separation process where water ﬁltration method, that acts as a barrier to viruses, particulates, bacteria, endotoxins, and other microbes suspended in the water which is driven by pressure. It has the rejective ability to separate insoluble or soluble substances from water. The ﬁltration pore is general range of 0.02μm - 0. 1μm.The ﬁltration process is at room temperature, no phase change and no re-pollution. The feed ﬂows either inside the shell or in the Lumen of the ﬁbres.  </p>
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
            {/* Process Section */}
            <div className="prose prose-lg text-slate-600 max-w-none py-10">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6 text-center">Process</h2>
              <div className='py-6'>
                <img
                  src="/images/U-flocs-UF/Uf Process Diagram.png"
                  alt="UF Technology"
                  className="w-4xl h-auto rounded-xl shadow-lg object-cover mx-auto block"
                />
              </div>
            </div>  
          
        </div>
      </div>




      {/* Advantages */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <p className="text-slate-600 text-sm">Eﬀective particle removal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <p className="text-slate-600 text-sm">Chemical free process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <p className="text-slate-600 text-sm">Prevention from pathogen passage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <p className="text-slate-600 text-sm">Microbial reduction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-3 flex items-center justify-center shadow-2xl">
              <img
                src="/images/U-flocs-UF/UF Imafes 5.png"
                alt="UF Images by Albion"
                className="w-full h-auto rounded-[2rem] object-contain"
              />
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
              { title: "Lake & River Water Filtration", text: "Removes turbidity, bacteria, and suspended solids for safe potable and process water production." },
              { title: "Pre-Treatment for RO Systems", text: "Protects RO membranes by removing colloids, organics, and fine particulates." },
              { title: "Post-Treatment of ETP / STP Projects", text: "Polishes treated effluent to meet stringent discharge and reuse quality standards." }

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

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-900 heading-font">Project Gallery</h3>
        </div>
        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveImage(img)}
              className="cursor-pointer rounded-xl shadow-lg hover:scale-105 transition object-cover"
              alt="DAF Gallery"
            />
          ))}
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
              alt="Expanded view"
            />
          </div>
        )}
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

    </div>
  );
};

export default TechUf;
