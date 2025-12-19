
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Download, Send, AlertCircle } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

interface TechDetailProps {
  addLead: (lead: any) => void;
}

const TechnologyDetail: React.FC<TechDetailProps> = ({ addLead }) => {
  const { id } = useParams<{ id: string }>();
  const tech = TECHNOLOGIES.find(t => t.id === id);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!tech) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Technology Not Found</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: tech.name, type: 'brochure' });
    setSubmitted(true);
    // In a real app, this would trigger a download or email
    setTimeout(() => {
      alert("Brochure requested! Our team will send it to your email shortly.");
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '' });
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-blue-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Technologies
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 heading-font">{tech.name}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {tech.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden mb-12 shadow-xl border border-slate-100">
              <img src={tech.image} alt={tech.name} className="w-full h-[400px] object-cover" />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6 heading-font">Overview</h2>
            <div className="prose prose-lg text-slate-600 mb-12">
              <p className="leading-relaxed">
                {tech.fullContent}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <AlertCircle className="w-5 h-5" />
                  </span>
                  Ideal Applications
                </h3>
                <ul className="space-y-4">
                  {tech.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-inner">
                <div className="flex items-center mb-6">
                  <Download className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Get Brochure</h3>
                </div>
                <p className="text-sm text-slate-500 mb-6">
                  Download full technical specifications and project case studies for {tech.shortName}.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" /> Request Brochure
                  </button>
                </form>
              </div>

              <div className="mt-8 bg-blue-900 text-white rounded-2xl p-8">
                <h4 className="font-bold text-lg mb-4">Need a custom quote?</h4>
                <p className="text-blue-200 text-sm mb-6">
                  Our engineers can provide a free feasibility report for your project.
                </p>
                <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold transition-all">
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetail;
