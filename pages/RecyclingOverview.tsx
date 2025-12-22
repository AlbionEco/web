
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Droplets, Shield, CheckCircle2 } from 'lucide-react';
import { WATER_RECYCLING_TREATMENTS } from '../constants';

const RecyclingOverview: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Water Recycling Hub</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Industrial-grade solutions for Effluent and Sewage recovery, designed to minimize ecological footprints.
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Effluent */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 heading-font">{WATER_RECYCLING_TREATMENTS.effluent.title}</h2>
            </div>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Industrial process water treatment requires specialized chemical and mechanical processes to remove toxins, heavy metals, and high TDS (Total Dissolved Solids).
            </p>
            <div className="space-y-4">
              {WATER_RECYCLING_TREATMENTS.effluent.items.map(item => (
                <Link 
                  key={item.id} 
                  to={`/recycling/${item.id}`}
                  className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-x-1 transition-all group"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Sewage */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 heading-font">{WATER_RECYCLING_TREATMENTS.sewage.title}</h2>
            </div>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Biological treatment systems for municipal, residential, and commercial sewage, focused on high-quality reusable effluent for HVAC and landscaping.
            </p>
            <div className="space-y-4">
              {WATER_RECYCLING_TREATMENTS.sewage.items.map(item => (
                <Link 
                  key={item.id} 
                  to={`/recycling/${item.id}`}
                  className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-x-1 transition-all group"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Advantage */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 heading-font">Why Albion Treatment Systems?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Modular Architecture", text: "Pre-fabricated units for 50% faster commissioning." },
              { title: "Smart SCADA", text: "Real-time remote tracking of flow rates and TDS levels." },
              { title: "Minimal Footprint", text: "Compact designs that save up to 40% valuable land area." }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <CheckCircle2 className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingOverview;
