
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Droplets, ShieldCheck, Cpu } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="bg-blue-900 p-2 rounded-lg mr-3 group-hover:bg-blue-800 transition-colors">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-blue-900 tracking-tight">ALBION <span className="text-blue-600">ECOTECH</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">About</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-slate-600 hover:text-blue-900 font-medium transition-colors"
                onMouseEnter={() => setIsTechOpen(true)}
                onMouseLeave={() => setIsTechOpen(false)}
              >
                Technologies <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg border border-slate-100 overflow-hidden transition-all duration-300 ${isTechOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsTechOpen(true)}
                onMouseLeave={() => setIsTechOpen(false)}
              >
                {TECHNOLOGIES.map((tech) => (
                  <Link 
                    key={tech.id} 
                    to={`/technology/${tech.id}`} 
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-900 border-b border-slate-50 last:border-0"
                  >
                    {tech.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/industries" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Industries</Link>
            <Link to="/projects" className="text-slate-600 hover:text-blue-900 font-medium transition-colors">Projects</Link>
            <Link to="/contact" className="bg-blue-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-all font-semibold shadow-lg shadow-blue-900/20">
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen border-b border-slate-100' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">About</Link>
          <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Technologies</div>
          {TECHNOLOGIES.map((tech) => (
            <Link key={tech.id} to={`/technology/${tech.id}`} onClick={() => setIsOpen(false)} className="block px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md">
              {tech.name}
            </Link>
          ))}
          <Link to="/industries" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Industries</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-4 w-full text-center bg-blue-900 text-white px-4 py-3 rounded-lg font-bold">
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
