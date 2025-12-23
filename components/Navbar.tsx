
import React, { useState, useEffect, useRef  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ArrowRight, Building2, Cpu, Globe2, ChevronRight } from 'lucide-react';
import { TECHNOLOGIES, INDUSTRIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isRecycleOpen, setIsRecycleOpen] = useState(false);
  const [isMembraneOpen, setIsMembraneOpen] = useState(false);
const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const blufoxLink = "https://www.blufoxmembranes.com";

// Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredTech = TECHNOLOGIES.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIndustries = INDUSTRIES.filter(i => 
    i.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleResultClick = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };


  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="/images/Albion_high_-_logo-removebg-preview.png" alt="Albion Ecotech logo" className='w-48 h-16'/>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm lg:text-base">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm lg:text-base">About</Link>
            
            {/* Technologies Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsTechOpen(true)} onMouseLeave={() => setIsTechOpen(false)}>
              <button className="flex items-center text-slate-600 hover:text-blue-900 font-medium transition-colors h-20 text-sm lg:text-base">
                Technologies <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className={`absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border border-slate-100 overflow-hidden transition-all duration-300 z-50 ${isTechOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/technologies" className="block px-4 py-3 bg-slate-50 text-xs font-bold text-blue-900 uppercase tracking-widest border-b border-slate-100 hover:bg-blue-50">Overview</Link>
                <Link to="/technology/a-pro-daf" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">A-PRO DAF System</Link>
                <Link to="/technology/m-flocs" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">M-Flocs (AMBBR)</Link>
                <Link to="/technology/x-flocs" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">X-Flocs (MBR)</Link>
                <Link to="/technology/c-flocs" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">Cera Flocs (Ceramic MBR)</Link>
                <Link to="/technology/u-flocs" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">U-Flocs (UF System)</Link>
              </div>
            </div>

            {/* Water Recycling Mega Menu */}
            <div className="relative group" onMouseEnter={() => setIsRecycleOpen(true)} onMouseLeave={() => setIsRecycleOpen(false)}>
              <button className="flex items-center text-slate-600 hover:text-blue-900 font-medium transition-colors h-20 text-sm lg:text-base whitespace-nowrap">
                Water Recycling <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className={`absolute left-[-200px] mt-0 w-[600px] bg-white shadow-2xl rounded-b-xl border border-slate-100 overflow-hidden transition-all duration-300 z-50 ${isRecycleOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/recycling" className="block px-6 py-4 bg-blue-900 text-sm font-bold text-white uppercase tracking-widest hover:bg-blue-800 flex justify-between items-center">Recycling Overview <ChevronRight className="w-4 h-4" /></Link>
                <div className="grid grid-cols-2 p-6 gap-8">
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">Effluent Treatment</h3>
                    <div className="space-y-3 text-sm">
                      <Link to="/technology/a-pro-daf" className="block hover:text-blue-600 transition-colors font-medium">Dissolved Air Flotation (DAF)</Link>
                      <Link to="/recycling/afm" className="block hover:text-blue-600 transition-colors font-medium">Activated Filtration Media (AFM)</Link>
                      <Link to="/technology/c-flocs" className="block hover:text-blue-600 transition-colors font-medium">Cera Flocs</Link>
                      <Link to="/recycling/mvr" className="block hover:text-blue-600 transition-colors font-medium">Mechanical Vapor Recompressor</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4 border-b pb-2">Sewage Treatment</h3>
                    <div className="space-y-3 text-sm">
                      <Link to="/technology/x-flocs" className="block hover:text-blue-600 transition-colors font-medium">Membrane Bio Reactor (MBR)</Link>
                      <Link to="/technology/m-flocs" className="block hover:text-blue-600 transition-colors font-medium">Advanced Moving Bed (AMBBR)</Link>
                      <Link to="/recycling/mbbr" className="block hover:text-blue-600 transition-colors font-medium">Moving Bed Bioreactor (MBBR)</Link>
                      <Link to="/recycling/sbr" className="block hover:text-blue-600 transition-colors font-medium">Sequencing Batch Reactor (SBR)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membranes Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsMembraneOpen(true)} onMouseLeave={() => setIsMembraneOpen(false)}>
              <button className="flex items-center text-slate-600 hover:text-blue-900 font-medium transition-colors h-20 text-sm lg:text-base">
                Membranes <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className={`absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border border-slate-100 overflow-hidden transition-all duration-300 z-50 ${isMembraneOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/membranes" className="block px-4 py-3 bg-blue-50 text-xs font-bold text-blue-700 uppercase tracking-widest border-b border-slate-100">BluFox Partnership</Link>
                <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">MBR Hollow fiber Membranes</a>
                <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">Ultra Filtration Membrane (UF)</a>
                <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">Sumitomo Poreflon Membrane</a>
                <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-50">Flatsheet Ceramic Membrane</a>
                <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">Reverse Osmosis Membrane</a>
              </div>
            </div>

            <Link to="/industries" className="text-slate-600 hover:text-blue-900 font-medium transition-colors text-sm lg:text-base">Industries</Link>
           <Link to="/projects" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Projects</Link>
            <Link to="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition-all font-bold shadow-lg shadow-blue-900/20">
              Enquire Now
            </Link>
           </div>


          

          {/* Precision Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-slate-500 hover:text-blue-900 hover:bg-slate-50 rounded-full transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

          </div>

          {/* Mobile menu and search toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-600 p-2"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>


      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen border-b border-slate-100 overflow-y-auto pb-10' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">About</Link>
          <div className="px-3 py-2 text-xs font-bold text-blue-600 uppercase tracking-widest">Technologies</div>
          <Link to="/technology/a-pro-daf" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">DAF System</Link>
          <Link to="/technology/m-flocs" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">AMBBR System</Link>
          <Link to="/technology/x-flocs" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">MBR System</Link>
          <div className="px-3 py-2 text-xs font-bold text-blue-600 uppercase tracking-widest">Water Recycling</div>
          <Link to="/technology/a-pro-daf" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Effluent: DAF</Link>
          <Link to="/recycling/mbr" onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Sewage: MBR</Link>
          <div className="px-3 py-2 text-xs font-bold text-blue-600 uppercase tracking-widest">Membranes</div>
          <a href={blufoxLink} target="_blank" rel="noopener noreferrer" className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Visit BluFox site</a>
          <Link to="/industries" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Industries</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-4 w-full text-center bg-blue-900 text-white px-4 py-3 rounded-lg font-bold">Enquire Now</Link>
        </div>
      </div>
   {/* Global Precision Search Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-900/90 backdrop-blur-md transition-all duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="max-w-4xl mx-auto px-4 pt-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-white text-2xl font-bold heading-font flex items-center">
              <Search className="w-6 h-6 mr-3 text-blue-500" /> Site Search
            </h2>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-white/60 hover:text-white p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative mb-12">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search technologies, industries, or services..."
              className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl md:text-4xl py-6 px-2 outline-none focus:border-blue-500 transition-colors placeholder:text-white/20 font-bold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
            {/* Technology Results */}
            <div>
              <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-2" /> Engineered Technologies
              </h3>
              <div className="space-y-2">
                {filteredTech.map(tech => (
                  <button 
                    key={tech.id}
                    onClick={() => handleResultClick(`/technology/${tech.id}`)}
                    className="w-full group flex items-start p-4 rounded-2xl hover:bg-white/5 transition-all text-left"
                  >
                    <div className="flex-grow">
                      <div className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{tech.name}</div>
                      <div className="text-white/40 text-sm line-clamp-1">{tech.description}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
                {filteredTech.length === 0 && (
                  <p className="text-white/20 text-sm px-4">No matching technologies found.</p>
                )}
              </div>
            </div>

            {/* Industry & Navigation Results */}
            <div>
              <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center">
                <Globe2 className="w-3.5 h-3.5 mr-2" /> Sectors & Solutions
              </h3>
              <div className="space-y-2">
                {filteredIndustries.map((ind, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleResultClick('/industries')}
                    className="w-full group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all text-left"
                  >
                    <span className="text-white font-bold group-hover:text-blue-400 transition-colors">{ind} Services</span>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
                
                {/* Fixed Quick Links */}
                <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 mt-8 px-4">Quick Navigation</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleResultClick('/about')} className="text-left p-4 rounded-xl hover:bg-white/5 text-white/60 hover:text-white font-bold text-sm transition-all border border-white/5">Our Story</button>
                  <button onClick={() => handleResultClick('/projects')} className="text-left p-4 rounded-xl hover:bg-white/5 text-white/60 hover:text-white font-bold text-sm transition-all border border-white/5">Case Studies</button>
                  <button onClick={() => handleResultClick('/contact')} className="text-left p-4 rounded-xl hover:bg-white/5 text-white/60 hover:text-white font-bold text-sm transition-all border border-white/5">Contact</button>
                  <button onClick={() => handleResultClick('/downloads')} className="text-left p-4 rounded-xl hover:bg-white/5 text-white/60 hover:text-white font-bold text-sm transition-all border border-white/5">Resources</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/20 text-xs font-medium">
              Start typing to refine results. Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white/40">ESC</kbd> to exit.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
