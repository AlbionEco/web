
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Heart, Award, Cpu, Zap, Building2, ChevronRight, Droplets, Layers } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

const About: React.FC = () => {
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
    <div className="bg-white">

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
              <img src="Images/Albion Images.png" alt="Albion Office" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-10 rounded-3xl hidden md:block shadow-2xl">
                <div className="text-4xl font-bold mb-1">15+</div>
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
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:shadow-2xl/50 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
              <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 heading-font">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide high-efficiency, sustainable, and economically viable water treatment solutions that empower industries to achieve environmental compliance and resource optimization.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:shadow-2xl/50 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
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


      {/* Product We Offers Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Portfolio Overview</h2>
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Products & Engineering Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Core Technologies Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-900 rounded-xl">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Advanced Technologies</h4>
              </div>
              <div className="flex flex-col space-y-4">
                {TECHNOLOGIES.map((tech) => (
                  <Link 
                    key={tech.id} 
                    to={`/technology/${tech.id}`}
                    className="group flex items-center justify-between p-2 hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-white">{tech.name}</span>
                    <ChevronRight className="w-5 h-5 text-blue-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Water Recycling Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Water Recycling Systems</h4>
              </div>
              <div className="flex flex-col space-y-4">
                {[
                  { name: "Zero Liquid Discharge (ZLD)", path: "/contact" },
                  { name: "Effluent Recycling Plant", path: "/contact" },
                  { name: "Industrial Water Recovery", path: "/contact" },
                  { name: "Packaged Sewage Plants", path: "/technology/m-flocs" },
                  { name: "Tertiary Treatment Units", path: "/contact" }
                ].map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path}
                    className="group flex items-center justify-between p-2 hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-white">{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Membrane Column*/}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Layers className="w-6 h-6 text-blue-900" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Membrane Technologies</h4>
              </div>
              <div className="flex flex-col space-y-4">
                {/* set path to navigate to blufoxmembranes.com */}
                {[
                  { name: "Ultra Filtration (UF)", path: "https://blufoxmembranes.com/uf-membrane/" },
                  { name: "Membrane Bioreactor (MBR)", path: "https://blufoxmembranes.com/bf-series-hollow-fiber-mbr-membrane/" },
                  { name: "Ceramic Membrane Systems", path: "https://blufoxmembranes.com/ceramic-flat-sheet-membranes" },
                  { name: "Reverse Osmosis (RO) Units", path: "https://blufoxmembranes.com/reverse-osmosis-ro-membrane-blufox/" },
                ].map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path}
                    className="group flex items-center justify-between p-2 hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-white">{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
