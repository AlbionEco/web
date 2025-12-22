
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

const TechnologyOverview: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-24">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Our Technology Stack</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Proprietary high-efficiency systems engineered for zero liquid discharge and maximum water recovery.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNOLOGIES.map((tech) => (
            <Link 
              key={tech.id} 
              to={`/technology/${tech.id}`}
              className="bg-white rounded-3xl p-2 shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden rounded-2xl">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                  <div className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3">{tech.shortName}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors heading-font">
                    {tech.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">
                    {tech.description}
                  </p>
                  <div className="flex items-center text-blue-900 font-bold text-xs uppercase tracking-widest mt-auto pt-4">
                    Technical Specifications <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Engineering Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-blue-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-6 heading-font">Engineering Beyond Standards</h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Every Albion system is customized for the specific chemical profile of your effluent. Our in-house design team uses advanced computational modeling to predict system longevity and performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-xl"><ShieldCheck className="w-6 h-6 text-blue-400" /></div>
                <div>
                  <div className="font-bold">Compliance Guaranteed</div>
                  <div className="text-sm text-blue-300">Meets EPA and CPCB norms globally.</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-xl"><Zap className="w-6 h-6 text-blue-400" /></div>
                <div>
                  <div className="font-bold">Energy Optimized</div>
                  <div className="text-sm text-blue-300">Up to 30% reduction in power vs competition.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Recovery</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Less Sludge</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Installations</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
              <div className="text-3xl font-bold mb-2">IoT</div>
              <div className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Enabled</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyOverview;
