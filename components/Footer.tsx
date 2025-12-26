
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Lock, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Bio */}
          <div>
            <Link to="/" className="flex items-center group">
            <div className="flex items-center mb-6 bg-white px-8 py-3 rounded-md">
              <img src="/images/Albion_high_-_logo-removebg-preview.png" alt="Albion Ecotech logo" className='w-48 h-16 '/>
              {/* <div className="bg-blue-600 p-2 rounded mr-3">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">ALBION ECOTECH</span> */}
            </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Engineered-for-performance solutions in wastewater treatment, industrial water recycling, and environmental engineering. Helping industries achieve zero liquid discharge (ZLD) goals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/water-recycling-company/" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/waterrecyclingcompany/" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://share.google/oi9vQeP5tC3mEPvNj/" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Our Story</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industries Served</Link></li>
              <li><Link to="/why-albion" className="hover:text-blue-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/downloads" className="hover:text-blue-400 transition-colors">Resource Center</Link></li>
            </ul>
          </div>

          {/* Services/Tech */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Technologies</h3>
            <ul className="space-y-4">
              <li><Link to="/technology/a-pro-daf" className="hover:text-blue-400 transition-colors">A-PRO DAF System</Link></li>
              <li><Link to="/technology/m-flocs" className="hover:text-blue-400 transition-colors">M-Flocs (AMBBR)</Link></li>
              <li><Link to="/technology/x-flocs" className="hover:text-blue-400 transition-colors">X-Flocs (MBR)</Link></li>
              <li><Link to="/technology/c-flocs" className="hover:text-blue-400 transition-colors">Ceramic MBR</Link></li>
              <li><Link to="/technology/u-flocs" className="hover:text-blue-400 transition-colors">UF Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-1" />
                <span>1908, The Junomoneta Tower, Beside Rajhans Multiplex, Adajan Hazira Main Road, Pal, Surat 395009 Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>+91 99245 22279 </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <a href="mailto:info@albionecotech.com" className="hover:text-blue-400 transition-colors">info@albionecotech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© {new Date().getFullYear()} Albion Ecotech Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <Link to="/control-center" className="flex items-center text-slate-700 hover:text-slate-500 transition-colors ml-4">
              <Lock className="w-3 h-3 mr-1" /> Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
