
import React from 'react';
import { ExternalLink, CheckCircle2, Droplets, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectList = [
  {
    title: "500 KLD Zero Liquid Discharge (ZLD)",
    client: "Major Textile Hub, Gujarat",
    tech: "MBR + UF + RO",
    image: "public/Images/X-flocs MBR/MBR.png",
    stats: "95% Recovery Rate"
  },
  {
    title: "Advanced STP for Smart City",
    client: "Urban Development, Maharashtra",
    tech: "M-Flocs (AMBBR)",
    image: "public/Images/M-flocs AMBBR/AMBBR.png",
    stats: "Compact Footprint (-40%)"
  },
  {
    title: "Oily Water Treatment System",
    client: "Oil & Gas Major, Assam",
    tech: "A-PRO DAF + Ceramic MBR",
    image: "public/Images/A-pro DAF/DAF.png",
    stats: "Effluent oil < 1 ppm"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Case Studies & Performance</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Real-world engineering implementations across complex industrial environments.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {projectList.map((project, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                    <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                      {project.stats}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center text-blue-600 font-bold mb-2">
                    <MapPin className="w-5 h-5 mr-2" /> {project.client}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 heading-font">{project.title}</h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-bold border border-slate-200">
                      Technology: {project.tech}
                    </span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    A comprehensive solution designed to handle challenging effluent characteristics while meeting stringent government compliance standards. The system features full automation with SCADA monitoring.
                  </p>
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Fully Operational Since 2021
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Zero Liquid Discharge (ZLD) Achieved
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> Remote System Monitoring enabled
                    </li>
                  </ul>
                  <div className="pt-8">
                    <Link to="/contact" className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg">
                      View Detailed Performance <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
