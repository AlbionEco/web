
import React, { useState } from 'react';
import { Download, FileText, Send, Lock } from 'lucide-react';
import { TECHNOLOGIES } from '../constants';

interface DownloadsProps {
  addLead: (lead: any) => void;
}

const Downloads: React.FC<DownloadsProps> = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, interest: selectedFile || 'General Brochure', type: 'brochure' });
    alert("Request received! The download link has been sent to your email.");
    setSelectedFile(null);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Resource Center</h1>
          <p className="text-xl text-blue-200">Download technical brochures, corporate profiles, and case studies.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" /> Available Technical Documents
            </h2>
            
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">Corporate Overview 2024</h4>
                  <p className="text-sm text-slate-500">Full capability statement and project list (PDF - 4.5MB)</p>
                </div>
                <button 
                  onClick={() => setSelectedFile('Corporate Overview')}
                  className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" /> Request
                </button>
              </div>

              {TECHNOLOGIES.map((tech) => (
                <div key={tech.id} className="p-6 border-b border-slate-100 last:border-0 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{tech.name} Specifications</h4>
                    <p className="text-sm text-slate-500">Technical datasheet and P&ID diagrams (PDF - 2.8MB)</p>
                  </div>
                  <button 
                    onClick={() => setSelectedFile(`${tech.name} Brochure`)}
                    className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" /> Request
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all ${selectedFile ? 'border-blue-600 ring-4 ring-blue-600/10' : 'border-slate-100'}`}>
              <div className="flex items-center mb-6">
                <Lock className={`w-6 h-6 mr-3 ${selectedFile ? 'text-blue-600' : 'text-slate-400'}`} />
                <h3 className="text-xl font-bold text-slate-900">Secure Access</h3>
              </div>
              
              {!selectedFile ? (
                <div className="text-center py-10 text-slate-500">
                  <p className="text-sm">Please select a file to download.</p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <p className="text-sm text-slate-500 mb-6 font-medium">
                    Requested: <span className="text-blue-600 font-bold">{selectedFile}</span>
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input
                      type="email"
                      placeholder="Professional Email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Organization Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" /> Unlock Download
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
