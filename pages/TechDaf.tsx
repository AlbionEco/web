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

  const images = [
    "/images/A-pro-DAF/Daf Images 1.png",
    "/images/A-pro-DAF/Daf Images 2.png",
    "/images/A-pro-DAF/Daf Images 3.png"
  ];


  const [activeImage, setActiveImage] = useState<string | null>(null);



  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-[#0f172a] py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-5xl font-bold mb-6 heading-font">A-PRO Dissolved Air Floatation System (DAF)</h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Advanced Dissolved Air Flotation technology for ultra-high efficiency removal of oils, greases, and suspended solids from industrial effluent.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <img src="/images/A-pro-DAF/A-proTechnology Logo.png" alt="" className='w-auto h-[80px] object-cover' />

              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
                <img src="/images/A-pro-DAF/DAF.png" alt="DAF System Rendering" className="w-full h-[500px] object-cover" />
              </div>

              {/* About Section */}
              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">About</h2>
                <p className="mb-6 text-justify">
                  <span className="font-semibold text-slate-900">A-Pro</span> is gravity separation process where by the separation of two phases is achieved by increasing the speciﬁc gravity difference of the two phases. This is achieved by   attaching   micro   air   bubbles, brought about by saturating water with air under pressure, and then expanding the   water stream through valves to atmospheric pressure. These micro bubble nucleate into the solid particles to be separated,   thus   lowering   the   speciﬁc   gravity   and allowing contaminants to rise the surface.
                </p>
              </div>

              {/* Process Section */}
              <div className="prose prose-lg text-slate-600 max-w-none py-10">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Process</h2>
                <div className='py-6'>
                  <img
                    src="/images/A-pro-DAF/DAF Process.jpg"
                    alt="A-Pro Technology"
                    className="w-xl h-auto rounded-xl shadow-lg object-cover mx-auto block"
                  />
                </div>

                <div className="text-slate-600 text-md leading-relaxed">
                  <p className="mb-6 text-justify">
                    <span className="font-semibold text-slate-900">Dissolved air ﬂotation (A-Pro)</span> is a water treatment process that clariﬁes wastewaters (or other waters) by the removal of suspended matter such as oil or solids. The removal is achieved by dissolving air in the water or wastewater under pressure and then releasing the air at atmospheric pressure in a ﬂotation tank basin. The released air forms tiny bubbles which adhere to the suspended matter causingthe suspended matter to ﬂoat to the surface of the water where it may then be removed by a skimming device.
                  </p>
                </div>
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

      {/* High-Performance Features section */}
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

      {/* Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">High loading rate:</h5>
                    <p className="text-slate-600 text-sm">Typically 10-20m/h. New process variants have operated success fully up to 40-45m/h.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Very thick ﬂoat (sludge) product:</h5>
                    <p className="text-slate-600 text-sm">Typically 2-3% total solids ﬂoat can be achieved using hydraulic or mechanical skimming devices. Float can be de watered without intermediate thickening.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">No Polymer is required</h5>
                    <p className="text-slate-600 text-sm">as DAF does not require a large, dense ﬂoc. Coagulant dosages may also be reduced in some circumstances.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Algae removal</h5>
                    <p className="text-slate-600 text-sm">Excellent algae removal efﬁciencies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">5</div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Smaller footprint</h5>
                    <p className="text-slate-600 text-sm">Smaller footprint required as compared to conventional ﬂocculation and gravity sedimentation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-3 flex items-center justify-center shadow-2xl">
              <img
                src="/images/A-pro-DAF/Daf Images 4.png"
                alt="Daf Images by Albion"
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
              {
                title: "Poultry, Meat & Food Processing",
                text: "Removes blood, fats, proteins, suspended solids and high-organic load from  wastewater."
              },
              {
                title: "Dairy Processing Units",
                text: "Efficient removal of FOG, milk solids, and COD for stable downstream treatment."
              },
              {
                title: "Fish & Seafood Processing",
                text: "Separates oil, grease, proteins, and fine solids from odorous wastewater streams."
              },
              {
                title: "Mining Industry",
                text: "Removes heavy metals, suspended solids, and clarifies process water."
              },
              {
                title: "Petrochemical Industry",
                text: "Primary oil–water separation and hydrocarbon removal from refinery effluent."
              },
              {
                title: "Textile Industry",
                text: "Improves color removal, fiber recovery, and effluent clarity."
              },
              {
                title: "Tanneries & Leather Processing",
                text: "Removes chromium, sulfides, fats, and high TSS for improved treatment."
              },
              {
                title: "Pulp & Paper Industry",
                text: "Recovers fibers, reduces TSS & COD, and clarifies mill effluent."
              }
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

export default TechDaf;
