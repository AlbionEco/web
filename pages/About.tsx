
import React from 'react';
// Added Zap to the imports from lucide-react
import { Target, Eye, ShieldCheck, Heart, Award, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-font">Our Legacy of Innovation</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Albion Ecotech is committed to engineering a sustainable future through advanced water recovery and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 heading-font">Pioneers in Eco-Technology</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize wastewater management, Albion Ecotech Pvt. Ltd. has grown from a specialized engineering firm into a multi-national environmental technology leader.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe that wastewater is a resource, not a liability. Our engineered-for-performance systems enable industries to recycle up to 98% of their process water, significantly reducing environmental impact and operational costs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Award className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900">Quality Certified</h4>
                  <p className="text-sm text-slate-500">ISO 9001:2015 compliant engineering processes.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Cpu className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900">R&D Driven</h4>
                  <p className="text-sm text-slate-500">In-house labs for advanced water analysis.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Albion Office" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-10 rounded-3xl hidden md:block shadow-2xl">
                <div className="text-4xl font-bold mb-1">12+</div>
                <div className="text-blue-300 text-sm font-bold uppercase tracking-widest">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
              <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 heading-font">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide high-efficiency, sustainable, and economically viable water treatment solutions that empower industries to achieve environmental compliance and resource optimization.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
              <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-8">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 heading-font">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the global benchmark for ecological engineering, fostering a world where industrial growth and environmental preservation coexist through advanced circular water economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Reliability", text: "We build systems meant to last for decades, not years, with uncompromising quality." },
              { icon: Zap, title: "Efficiency", text: "Maximizing throughput while minimizing energy and chemical consumption in every design." },
              { icon: Heart, title: "Integrity", text: "Transparent communication and data-driven solutions that never over-promise." }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-10 h-10 text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
