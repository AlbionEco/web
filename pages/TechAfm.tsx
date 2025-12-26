
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Send, Waves, Download, Component, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechAfm: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'AFM Filtration', type: 'contact' });
    alert('Request for AFM Technical Data received.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const images = [
    "/images/AFM/AFM Images 1.png",
    "/images/AFM/AFM Images 2.png",
    "/images/AFM/AFM Images 3.png",
    "/images/AFM/AFM Images 4.png",
    "/images/AFM/AFM Images 5.png",

  ];


  const [activeImage, setActiveImage] = useState<string | null>(null);




  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/recycling" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Treatments
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 heading-font">Activated Filtration Media (AFM)</h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              High-performance, bio-resistant filtration media outperforming traditional sand filters by 100%.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="prose prose-lg text-slate-600 max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">About</h2>
              <p className="mb-6 text-justify">
                <span className="font-semibold text-slate-900">AFM®</span> is quite simply the most efficient granular filtration medium available on the market. It is highly engineered to give optimum mechanical filtration performance in a range of industrial and municipal water filtration applications. AFM® replaces sand in all filtration applications and can be used in a conventional sand filter without modification. Filtration up to 1micron can be achieved without micron filtration.
              </p>
              <img src="/images/AFM/Sand to AFM Image.png" alt="" className="w-auto h-[400px] object-cover mx-auto" />
            </div>


            {/* Container section */}
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
      {/* Unique Benefits */}
      <section className='py-16 bg-white'>
        <div className="prose prose-lg text-slate-600 max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6 text-center ">Unique Benefits</h2>
          <img src="/images/AFM/AFM Unique Benefits.png" alt="" className="w-auto h-[500px] object-cover mx-auto" />
        </div>
      </section>


      <section className='py-16 bg-slate-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 heading-font mb-6">Advantages</h2>
              <ul className="space-y-4 mt-8">
                {['AFM® is a direct replacement for sand in any type of sand filter',
                  'Reduces backwash water demand by an average of 50%.',
                  'Will not support Bacterial growth (Fouling)',
                  'Increase the life of Membranes (RO / UF)',
                  'Substantially reduces product water oxidation demand.',
                  'Have Life span up-to 14 years',
                  'Has more than double the fine particle retention performance of any other media',
                  'Engineered surface to adsorb fine particles, heavy metals, and metalloids including arsenic.',
                  'Resists biological fouling and prevents resultant channelling.',
                  'Provides quick return on investment, usually less than 2 years on water consumption alone.',
                  'Has a life cycle more than 4 times longer than sand.',
                  ].map((val, idx) => (
                    <li key={idx} className="flex items-center text-justify">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {val}
                    </li>
                  ))}
              </ul>
              <div className='bg-white border-l-7 border-green-600 pl-8 mt-10 p-8 font-bold text-md'>
                <p>Is certified ISO 9001: – 2015, ISO 14001 & 18001 standards & is certified HACCP NSF50 & for drinking water use under European DWI Reg 31 & NSF61.</p>
              </div>
              
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-2 flex items-center justify-center shadow-2xl">
              <img
                src="/images/AFM/AFM Grade details.png"
                alt="AFM Images by Albion"
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
              { title: "Pre-Treatment for RO / UF Plants", text: "Protects membranes by removing fine solids, turbidity, and colloidal contaminants." },
  { title: "Removal of Arsenic, Iron & Manganese", text: "Effectively reduces toxic and heavy metal content to meet potable water standards." },
  { title: "Cooling Tower Side-Stream Filtration", text: "Controls suspended solids and biological fouling to improve cooling efficiency." },
  { title: "Tertiary Treatment of Effluent", text: "Polishes treated wastewater for reuse and strict discharge compliance." },
  { title: "Swimming Pool Filtration Systems", text: "Delivers crystal-clear water with superior particulate and pathogen removal." },
  { title: "Municipal & Corporation Water Supply", text: "Enhances water clarity, safety, and distribution system reliability." },
  { title: "Lake & River Water Filtration", text: "Removes turbidity, algae, and pathogens from surface water sources." },
  { title: "Aquaculture Pre-Filtration (High TDS)", text: "Improves water quality and system stability in high-salinity environments." }

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
              alt="AFM Gallery"
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
                  Connect with our process engineers to receive a customized AFM proposal including flow rate analysis and footprint estimates.
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

export default TechAfm;
