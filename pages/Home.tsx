
import React, { Suspense, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Shield, Zap, Recycle, BarChart3, Users, Building2, Globe2, Loader2 , MapPin, Quote, Star, Calendar, ArrowUpRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import { TECHNOLOGIES, INDUSTRIES } from '../constants';
import { Blog } from '../types';

// 3D Model Component
const PlantModel = () => {
  // Loading the specific GLB file from the root directory
  const { scene } = useGLTF('/PackagedPlant2.glb');
  // Scale adjusted to 0.6 (60% of original size)
  // @ts-ignore: primitive is a valid React Three Fiber intrinsic element
  return <primitive object={scene} scale={0.6} />;
};

// Fallback for 3D loading
const SceneLoader = () => (
  <div className="flex flex-col items-center justify-center h-full text-blue-400">
    <Loader2 className="w-10 h-10 animate-spin mb-4" />
    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Architecting 3D View...</span>
  </div>
);

// Animated Counter Component
const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startAnimation = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              animationFrame = requestAnimationFrame(startAnimation);
            }
          };
          animationFrame = requestAnimationFrame(startAnimation);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};



interface HomeProps {
  addLead: (lead: any) => void;
   blogs: Blog[];
}

const Home: React.FC<HomeProps> = ({ addLead, blogs }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

// Sorting blogs by date descending to ensure the latest is first
  const latestBlogs = useMemo(() => {
    return [...blogs]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [blogs]);


  const globalPresence = [
    { country: "India", city: "Surat, Gujarat", x: "69%", y: "55%" },
    { country: "USA", city: "Delaware", x: "18%", y: "43%" },
    { country: "Dubai", city: "UAE", x: "64%", y: "54%" },
    { country: "China", city: "Shanghai", x: "74%", y: "45%" },
    { country: "Russia", city: "Moscow", x: "72%", y: "20%" },
    { country: "Thailand", city: "Bangkok", x: "76%", y: "58%" },
    { country: "Philippines", city: "Manila", x: "83%", y: "59%" },
    { country: "Kenya", city: "Nairobi", x: "61%", y: "69%" }
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


  return (
    <div className="overflow-hidden">
      {/* 3D Interactive Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-[#020617] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content - Typography & CTA */}
            <div className="lg:w-[45%] text-left pt-20 lg:pt-0">
              <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest uppercase mb-8 border border-blue-500/20 backdrop-blur-xl">
                <Zap className="w-3.5 h-3.5 mr-2" /> Engineering Excellence Since 2010
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] heading-font">
                Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Wastewater</span> <br />
                Recovery
              </h1>
              
              <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
                Experience the peak of industrial modularity. Our Packaged Treatment Plants are engineered for 98% water recovery with a zero-footprint philosophy.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center shadow-2xl shadow-blue-600/30 group">
                  Enquire Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                  Our Legacy
                </Link>
              </div>

              {/* Status Indicators */}
              <div className="mt-16 flex items-center space-x-8 border-t border-white/5 pt-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">500+</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Sites</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">IoT</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Monitored</span>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Viewer */}
            <div className="lg:w-[55%] w-full h-[500px] lg:h-[750px] relative">
              <Suspense fallback={<SceneLoader />}>
                <Canvas shadows dpr={[1, 2]}>
                  <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={35} />
                  {/* @ts-ignore */}
                  <ambientLight intensity={0.4} />
                  {/* @ts-ignore */}
                  <spotLight position={[10, 15, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
                  
                  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    {/* @ts-ignore: Stage shadows prop has specific configuration types that may vary by @react-three/drei version */}
                    <Stage
  environment="city"
  intensity={0.5}
  shadows
>
  <PlantModel />
</Stage>
                  </Float>

                  {/* @ts-ignore: OrbitControls props might have type mismatches in some environments */}
                  <OrbitControls 
                    enableZoom={false} 
                    autoRotate 
                    autoRotateSpeed={0.8}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.8}
                  />
                  <Environment preset="night" />
                  <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={20} blur={3} far={4} />
                </Canvas>
              </Suspense>

              {/* Float Overlay Labels */}
              <div className="absolute top-1/4 right-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl animate-bounce pointer-events-none hidden md:block">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">Smart Automation</span>
                </div>
              </div>

              <div className="absolute bottom-20 left-10 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full flex items-center pointer-events-none shadow-2xl">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Live 3D Model: PackagedPlant V2</span>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* Trust Stats */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-blue-800 last:border-0">
              <div className="text-4xl font-bold mb-1">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center border-r border-blue-800 last:border-0">
              <div className="text-4xl font-bold mb-1">
                <CountUp end={8} suffix="+" />
              </div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="text-center border-r border-blue-800 last:border-0">
              <div className="text-4xl font-bold mb-1">
                <CountUp end={200} suffix="k" />
              </div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">m³/day Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">
                <CountUp end={8} suffix="+" />
              </div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">Global Patents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 heading-font">Core Engineering Technologies</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Proprietary systems designed for maximum efficiency, minimum footprint, and long-term reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECHNOLOGIES.map((tech) => (
              <Link key={tech.id} to={`/technology/${tech.id}`} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 relative overflow-hidden">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {tech.shortName}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{tech.name}</h4>
                  <p className="text-slate-600 mb-6 text-sm line-clamp-2">
                    {tech.description}
                  </p>
                  <div className="flex items-center text-blue-900 font-bold text-sm">
                    View Technical Specs <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions (ETP/STP) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="/images/Packaged STP & ETP.png" 
                alt="Packaged STP Plant" 
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-5 -left-10 bg-blue-900 text-white py-5 px-10 rounded-2xl hidden md:block shadow-2xl">
                <div className="text-2xl font-bold mb-1">  Plug & Play  </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Modular Systems</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 heading-font">Packaged STP & ETP Plants</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our plug-and-play packaged plants are pre-engineered, factory-tested, and ready for rapid deployment. Perfect for residential complexes, resorts, and remote industrial sites.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Quick Installation & Commissioning',
                  'Minimal Civil Works Required',
                  'Fully Automated Operation (SCADA)',
                  'Highly Cost-Effective Maintenance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="bg-blue-100 p-1 rounded-full mr-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                Request a Site Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 heading-font">Global Impact Across Sectors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl hover:bg-blue-900 hover:text-white transition-all group cursor-default">
                <div className="mb-4">
                  {idx === 0 && <Building2 className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                  {idx === 1 && <Recycle className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                  {idx === 2 && <BarChart3 className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                  {idx === 3 && <Users className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                  {idx === 4 && <Globe2 className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                  {idx === 5 && <Shield className="w-10 h-10 text-blue-600 group-hover:text-blue-300" />}
                </div>
                <span className="font-semibold text-sm">{industry}</span>
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

{/* Latest Dynamic Blogs Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Knowledge Base</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 heading-font">Latest Industry Insights</h3>
            </div>
            <Link to="/blog" className="group flex items-center text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-widest">
              Explore All Articles <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`} className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-56 relative overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-blue-500" /> {blog.date}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
                    {blog.title}
                  </h4>
                  <div className="w-10 h-1 bg-slate-100 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
            {latestBlogs.length === 0 && (
              <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 font-bold uppercase tracking-widest">New updates coming soon</p>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 heading-font">Ready to optimize your water treatment system?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Our experts are ready to analyze your current infrastructure and provide a data-driven proposal for efficiency upgrades.
          </p>
          <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors inline-block">
            Talk to an Expert
          </Link>
        </div>
      </section>
   

{/* Interactive Global Map Section */}
      <section className="py-12 lg:py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Our Global Footprint</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 heading-font">Engineering Beyond Borders</h3>
          </div>
          
          <div className="relative bg-white rounded-3xl md:rounded-[3rem] p-2 md:p-6 border border-slate-200 shadow-xl overflow-hidden">
            {/* Map Container - Responsive aspect ratio */}
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-100">
              {/* Plain Gray Background World Map Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-multiply"
                style={{ 
                  backgroundImage: `url('/images/GlobalMapImage.avif')`,
                  filter: 'grayscale(100%) brightness(1.1)'
                }}
              ></div>

              {/* Interactive Markers */}
              {globalPresence.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="absolute cursor-pointer transition-all duration-300 z-10"
                  style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => setHoveredLocation(loc.country)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setHoveredLocation(hoveredLocation === loc.country ? null : loc.country)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 md:w-12 md:h-12 bg-blue-600/20 rounded-full animate-ping"></div>
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-white shadow-xl transition-all duration-300 ${hoveredLocation === loc.country ? 'bg-blue-600 scale-125 md:scale-150' : 'bg-slate-400'}`}></div>

                    {/* Tooltip */}
                    <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none z-20 ${hoveredLocation === loc.country ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}`}>
                      <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl flex items-center">
                        <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg md:rounded-xl mr-2 md:mr-3">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-widest">{loc.country}</div>
                          <div className="text-[8px] md:text-[10px] font-bold text-blue-500 uppercase">{loc.city}</div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border-r border-b border-slate-200 rotate-45 -mt-1 md:-mt-1.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Country Pill Buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 relative z-10 px-2 pb-2">
              {globalPresence.map((loc, idx) => (
                <button 
                  key={idx}
                  onMouseEnter={() => setHoveredLocation(loc.country)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setHoveredLocation(loc.country)}
                  className={`px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all duration-300 border ${hoveredLocation === loc.country ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-blue-300 hover:text-blue-600'}`}
                >
                  {loc.country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Home;