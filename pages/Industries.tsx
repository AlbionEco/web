
import React from 'react';
import { Pill, Shirt, Coffee, Car, FlaskConical, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industryData = [
  { icon: Pill, name: "Pharmaceutical", desc: "Specialized systems for high COD, BOD and API removal in compliance with pollution norms." },
  { icon: Shirt, name: "Textile & Dyeing", desc: "Color removal and salt recovery for high-efficiency Zero Liquid Discharge (ZLD) plants." },
  { icon: Coffee, name: "Food & Beverage", desc: "Hygienic water treatment for dairies, breweries, and food processing units." },
  { icon: Car, name: "Automobile", desc: "Treatment for paint shop effluent, oily wastewater, and degreasing process water." },
  { icon: FlaskConical, name: "Chemical Processing", desc: "Resistant materials for handling aggressive chemical effluents and heavy metals." },
  { icon: Home, name: "Residential & Commercial", desc: "Odor-free, compact STPs for malls, apartments, and commercial towers." }
];

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Global Sector Expertise</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We deliver tailored environmental solutions to the world's most demanding industrial sectors.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.map((ind, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  <ind.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{ind.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{ind.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Discuss Industry Needs <ChevronRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 heading-font">Specialized Projects?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Don't see your industry listed? We handle complex, non-standard industrial effluent challenges through our custom engineering laboratory.
          </p>
          <Link to="/contact" className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
            Consult our R&D Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
