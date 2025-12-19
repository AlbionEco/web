
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Shield, Zap, Recycle, BarChart3, Users, Building2, Globe2, Loader2 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import { TECHNOLOGIES, INDUSTRIES } from '../constants';

// 3D Model Component
const PlantModel = () => {
  // Loading the specific GLB file from the root directory
  const { scene } = useGLTF('PackagedPlant2.glb');
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

interface HomeProps {
  addLead: (lead: any) => void;
}

const Home: React.FC<HomeProps> = ({ addLead }) => {
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
                <Zap className="w-3.5 h-3.5 mr-2" /> Engineering Excellence Since 2012
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
                  <span className="text-2xl font-bold text-white">ZLD</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Compliant</span>
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
                    <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.2, blur: 2 }}>
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
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center border-r border-blue-800 last:border-0">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="text-center border-r border-blue-800 last:border-0">
              <div className="text-4xl font-bold mb-1">200k</div>
              <div className="text-blue-300 text-sm font-medium uppercase tracking-wider">m³/day Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">10+</div>
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
                src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=1200" 
                alt="Packaged STP Plant" 
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
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
    </div>
  );
};

export default Home;
