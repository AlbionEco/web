import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { PRODUCTS } from "../constants";

const EtpStpproducts: React.FC<{ addLead: (l: any) => void }> = ({ addLead }) => {

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: 'Cera-flocs System', type: 'contact' });
    alert('Inquiry for Cera-flocs expert consultation received.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="#" className="inline-flex items-center text-blue-400 hover:text-white mb-10 font-bold text-xs tracking-widest uppercase transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight heading-font">
            ETP / STP Products
          </h1>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-slate-900 text-center mb-20 heading-font">
            We Have Vast Varieties of Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                <img src={p.image} className="h-60 w-130% object-cover group-hover:scale-105 transition-transform duration-500 mx-auto" />

                <div className="p-8">
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="flex items-center justify-between w-full text-left">

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {p.title}
                    </h3>

                    <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${open === i && "rotate-180 text-blue-600"}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] mt-6" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-2 text-slate-600 list-disc pl-5">
                        {p.points.map((x, j) => <li key={j}>{x}</li>)}
                      </ul>
                    </div>
                  </div>

                  <a href="#enquiry" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
                    Get a Quote →
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">

              <div className="p-14 lg:p-20 text-white">
                <h3 className="text-4xl font-bold mb-8 heading-font">Ready to Upgrade Your Pre-Treatment?</h3>
                <p className="text-blue-200 mb-12 leading-relaxed max-w-lg">
                  Connect with our process engineers for customized plant design, flow analysis & compliance planning.
                </p>

                <div className="space-y-6">
                  {["Water Sample Analysis", "Technical Drawing Support", "ZLD Compliance Study"].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-300 mr-4" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-14 lg:p-20">
                <form onSubmit={handleSubmit} className="space-y-7">

                  {["name", "company", "email"].map((field, i) => (
                    <div key={i}>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                        {field.replace(/^\w/, c => c.toUpperCase())}
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition"
                        value={(formData as any)[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                      Message / Flow Requirements
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold shadow-xl flex items-center justify-center transition">
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

export default EtpStpproducts;
