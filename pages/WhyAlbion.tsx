
import React from 'react';
import { ShieldCheck, Cpu, Banknote, Workflow, Headset, Zap } from 'lucide-react';

const WhyAlbion: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Why Choose Albion Ecotech?</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We don't just sell equipment; we provide life-cycle environmental engineering partnerships.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Compliance Assurance", text: "100% guarantee that our systems meet and exceed PCB and central government pollution norms." },
              { icon: Cpu, title: "Advanced Automation", text: "Every plant comes with PLC/SCADA options for remote monitoring and labor-free operation." },
              { icon: Banknote, title: "ROI Optimized", text: "Low chemical and power consumption ensures your water treatment system pays for itself via water reuse." },
              { icon: Workflow, title: "Modular & Scalable", text: "Our designs are flexible, allowing you to increase capacity as your production grows." },
              { icon: Headset, title: "24/7 Support", text: "Dedicated AMC team and remote troubleshooting to ensure zero downtime for your utility operations." },
              { icon: Zap, title: "Quick Commissioning", text: "Factory-fabricated modular units reduce on-site civil work and installation time by up to 60%." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Partner with Engineering Experts</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our team consists of post-graduate environmental engineers, chemical specialists, and civil designers dedicated to water sustainability.
          </p>
          <div className="inline-flex space-x-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">12+</div>
              <div className="text-xs font-bold text-slate-500 uppercase mt-2">Patents Held</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">50+</div>
              <div className="text-xs font-bold text-slate-500 uppercase mt-2">Expert Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900">100%</div>
              <div className="text-xs font-bold text-slate-500 uppercase mt-2">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAlbion;
