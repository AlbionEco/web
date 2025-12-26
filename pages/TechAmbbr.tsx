import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Grid2x2 ,
  ArrowDownNarrowWide ,
  CheckCircle2,
  ScanSearch,
  Layers,
  ArrowRight,
  Download,
  Send,
  Component,
  ArrowBigDownDash,
  SquareCheckBig 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TechAmbbr: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'AMBBR System', type: 'contact' });
    alert('Inquiry for AMBBR expert consultation received.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };



  const images = [
    "/images/M-flocs-AMBBR/AMBBR Images 4.png",
    "/images/M-flocs-AMBBR/AMBBR Images 1.png",
    "/images/M-flocs-AMBBR/AMBBR Images 3.png",
    "/images/M-flocs-AMBBR/AMBBR Images 5.png",
    "/images/M-flocs-AMBBR/AMBBR Images 2.png",
  ];
  const [activeImage, setActiveImage] = useState<string | null>(null);


  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="bg-[#020617] py-24 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/technologies" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tech Hub
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-5xl font-bold mb-6 heading-font">M-Flocs Advanced Moving Bed Bio Reactor System (AMBBR)</h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Next-gen biological treatment utilizing proprietary high-surface-area carriers to maximize bacterial growth in minimal tank volumes.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <img src="/images/M-flocs-AMBBR/M-flocs Technology Logo.png" alt="" className='w-auto h-[80px] object-cover' />

              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-slate-50">
                <img src="/images/M-flocs-AMBBR/AMBBR.png" alt="AMBBR Carriers" className="w-full h-[450px] object-cover" />
              </div>

              {/* About Section */}
              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">About</h2>
                <p className="mb-6 text-justify">
                  <span className="font-semibold text-slate-900">AMBBR</span> carriers based aerobic biological wastewater treatment solutions are offered as IFAS (Integrated Fixed Film Activated Sludge) process configuration. However, over the past few decades, <span className="font-semibold text-slate-900">AMBBR</span> process is gaining momentum due to its hybrid configuration and specific benefits the process provides to the wastewater treatment plants. <span className="font-semibold text-slate-900">AMBBR</span> process with textile sheets, cord media and other fixed in place media has been around the scene quite for a long time and has been successfully applied for the up-gradation of existing overloaded activated sludge plants.

                  Though originally developed for the up-gradation of existing activated sludge plants, the hybrid process configuration can be applied for the new plants as well.
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
              src="/images/M-flocs-AMBBR/AMBBR+UF_PFD-Model_pages-to-jpg-0001.jpg"
              alt="M-Flocs Technology"
              className="w-xl h-auto rounded-xl shadow-lg object-cover mx-auto block"
            />
          </div>
          <div className='py-6'>
            <img
              src="/images/M-flocs-AMBBR/AMBBR Process Flow Diagram.png"
              alt="M-Flocs  Technology"
              className="w-4xl h-auto rounded-xl shadow-lg object-cover mx-auto block"
            />
          </div>

          <div className="text-slate-600 text-md leading-relaxed">
            <p className="mb-6 text-justify">
              <span className="font-semibold text-slate-900">AMBBR</span> process is nothing but an activated sludge process with attached growth media added to the aeration basin.  Thus, in this process configuration, MLSS is also kept in the suspended phase along with <span className="font-semibold text-slate-900">AMBBR</span> carriers using RAS (Returned Activated Sludge) as practiced in the conventional activated sludge process. This combination of both suspended growth and attached growth process makes <span className="font-semibold text-slate-900">AMBBR</span> a truly hybrid process bringing advantages of both attached growth and suspended growth processes. This addition of attached growth media in different forms enhances the efficiency of the aeration tank by providing additional biomass in the aeration tank.
            </p>
          </div>
        </div>
        </section>
      


      {/* High-Performance Features section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Advantages of AMBBR as per its properties</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: ArrowDownNarrowWide,
                title: "Higher Specific Gravity",
                desc: "Easier mixing and fluidization with lower energy requirement"
              },
              {
                icon: Grid2x2,
                title: "Hydrophilic Surface",
                desc: "Quicker colonization and biofilm formation, Better wetting and fluidization of media, and Lower energy consumption for mixing"
              },
              {
                icon: ScanSearch,
                title: "Fine pores and higher porosity",
                desc: "Faster colonization, Protection against shock loads, Better diffusion gradients and Development of specific biomass"
              },
              {
                icon: Layers,
                title: "Surface Roughness and adsorbing capacity",
                desc: "Faster colonization"
              },
              {
                icon: ArrowBigDownDash,
                title:"Lower degree of filling",
                desc:"Better mixing, Better mass transfer and Better fluidization."
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
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Smaller foot print and reduced CAPEX</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Remarkable process stability against toxic shock loads</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">50-400 % higher process efficiency compared to conventional technologies</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Lower Energy Consumption</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Reduced Sludge Production</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Improved clarifier operation</p>
                </div>
                <div className="flex items-start">
                  <SquareCheckBig className='w-7 h-7 text-blue-600 mr-3' />
                  <p className="text-slate-600 text-sm">Better results under varying operating conditions</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-3 flex items-center justify-center shadow-2xl">
              <img
                src="/images/M-flocs-AMBBR/Ambbr media image.png"
                alt="M-flocs AMBBR Images by Albion"
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
               { title: "Textile Industries (Weaving / Dyeing)", text: "Efficient removal of color, COD, and process contaminants for stable biological treatment." },
  { title: "Pharmaceutical Industries", text: "Handles high-strength, toxic wastewater with improved biodegradation performance." },
  { title: "Automobile Industries", text: "Removes oils, grease, heavy metals, and process chemicals from effluent streams." },
  { title: "Sewage Water Treatment", text: "Enhances organic load removal and improves overall plant treatment efficiency." },
  { title: "Removal of Heavy Metal", text: "Facilitates precipitation and separation of toxic metals from industrial wastewater." },
  { title: "Removal of Ammonia and Nitrates", text: "Supports advanced nitrification and denitrification for nutrient control." },
  { title: "Up-gradation of Existing Plant", text: "Boosts plant capacity and performance with minimal civil and mechanical modification." }
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
              alt="AMBBR Gallery"
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

export default TechAmbbr;
