
import React from 'react';
import { Pill, Shirt, Coffee, Car, FlaskConical, Home, ChevronRight, Building2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const industryData = [
  { icon: Pill, name: "Pharmaceutical", desc: "Specialized systems for high COD, BOD and API removal in compliance with pollution norms." },
  { icon: Shirt, name: "Textile & Dyeing", desc: "Color removal and salt recovery for high-efficiency Zero Liquid Discharge (ZLD) plants." },
  { icon: Coffee, name: "Food & Beverage", desc: "Hygienic water treatment for dairies, breweries, and food processing units." },
  { icon: Car, name: "Automobile", desc: "Treatment for paint shop effluent, oily wastewater, and degreasing process water." },
  { icon: FlaskConical, name: "Chemical Processing", desc: "Resistant materials for handling aggressive chemical effluents and heavy metals." },
  { icon: Home, name: "Residential & Commercial", desc: "Odor-free, compact STPs for malls, apartments, and commercial towers." }
];

const testimonials = [
    {
      quote: "Albion's ZLD system reduced our freshwater intake by 90%. Their engineering precision is truly world-class.",
      author: "Director of Operations",
      company: "Leading Textile Conglomerate",
      industry: "Textiles"
    },
    {
      quote: "The modularity of the X-Flocs MBR allowed us to upgrade our capacity without expanding our land footprint. Highly recommended.",
      author: "VP Infrastructure",
      company: "Pharma Innovation Lab",
      industry: "Pharmaceutical"
    },
    {
      quote: "Reliable, automated, and efficient. The remote monitoring features have simplified our utility management significantly.",
      author: "Head of Facilities",
      company: "Global Automotive OEM",
      industry: "Automobile"
    }
  ];

const Industries: React.FC = () => {
// Mocking 44 client logo paths as requested. 
  // In a real scenario, these would point to the actual "Images/clients/..." directory.
  const clientLogos = Array.from({ length: 44 }, (_, i) => ({
    id: i + 1,
    url: `Images/Esteemed Clients/${i + 1}.png`,
    alt: `Esteemed Client ${i + 1}`
  }));

  // Split into two rows for the carousel
  const row1 = clientLogos.slice(0, 22);
  const row2 = clientLogos.slice(22, 44);

  return (
    <div className="bg-slate-50">

      {/* CSS for Infinite Marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-slower {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover .animate-marquee,
          .marquee-container:hover .animate-marquee-slower {
            animation-play-state: paused;
          }
        `}
      </style>

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


      {/* Esteemed Clients Section */}
      <section className="py-20 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 mr-2" /> Global Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 heading-font">Trusted by 500+ Industry Leaders</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Our environmental solutions power the utilities of Fortune 500 companies and leading industrial hubs across 15+ countries.
          </p>
        </div>

        {/* Row 1: Right to Left */}
        <div className="relative flex items-center mb-12 marquee-container">
          <div className="animate-marquee">
            {[...row1, ...row1].map((logo, index) => (
              <div key={index} className="mx-4 flex items-center justify-center w-48 h-20 bg-white rounded-2xl border border-slate-100 shadow-sm p-2 hover:border-blue-300 transition-colors group">
                <img 
                  src={logo.url} 
                  alt={logo.alt} 
                  className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (Slower speed) */}
        <div className="relative flex items-center mb-12 marquee-container">
          <div className="animate-marquee-slower">
            {[...row2, ...row2].map((logo, index) => (
              <div key={index} className="mx-4 flex items-center justify-center w-48 h-20 bg-white rounded-2xl border border-slate-100 shadow-sm p-2 hover:border-blue-300 transition-colors group">
                <img 
                  src={logo.url} 
                  alt={logo.alt} 
                  className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials */}
      <section className="py-16 bg-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Performance Reviews</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 heading-font">Trusted by Industry Leaders</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group">
                <div>
                  <div className="flex text-blue-500 mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <Quote className="w-10 h-10 text-blue-100 mb-4 group-hover:text-blue-200 transition-colors" />
                  <p className="text-slate-700 italic leading-relaxed mb-8">"{t.quote}"</p>
                </div>
                <div>
                  <div className="w-10 h-1 bg-blue-600 mb-4"></div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">{t.company}</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase mt-1">{t.industry} Sector</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
