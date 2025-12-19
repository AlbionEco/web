
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

interface ContactProps {
  addLead: (lead: any) => void;
}

const Contact: React.FC<ContactProps> = ({ addLead }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'General Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ ...formData, type: 'contact' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '', interest: 'General Inquiry' });
      alert("Message received! Our engineers will contact you within 24 hours.");
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Connect with Our Experts</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Discuss your technical requirements with our engineering team or request a site visit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Headquarters</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Plot No. 42, Sector 63, Noida,<br />
                      Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Phone className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Direct Contact</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Main: +91 99999 XXXXX<br />
                      Sales: +91 88888 XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Address</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      General: info@albionecotech.com<br />
                      Projects: sales@albionecotech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Clock className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Mon - Sat: 09:30 AM - 06:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Request a Proposal</h3>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                For complex industrial systems, send your water analysis reports and flow rates for a detailed technical proposal.
              </p>
              <button className="w-full border-2 border-white/20 hover:bg-white/10 transition-colors py-3 rounded-xl font-bold flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" /> Start Discussion
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 heading-font">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email ID</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Area of Interest</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>STP / ETP System</option>
                    <option>Membrane Technologies</option>
                    <option>Chemical Supply</option>
                    <option>AMC / Operation Services</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Project Requirements / Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg shadow-blue-900/20"
                  >
                    <Send className="w-5 h-5 mr-3" /> Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
