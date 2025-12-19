
import React, { useState } from 'react';
import { 
  Users, FileText, LogOut, Plus, Trash2, 
  Download, Search, Mail, Phone, Building, 
  ChevronRight, Calendar, Filter
} from 'lucide-react';
import { Lead, Blog } from '../types';

interface AdminDashboardProps {
  leads: Lead[];
  blogs: Blog[];
  onAddBlog: (blog: any) => void;
  onDeleteBlog: (id: string) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ leads, blogs, onAddBlog, onDeleteBlog, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'blogs'>('leads');
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBlog, setNewBlog] = useState({ 
    title: '', 
    content: '', 
    author: 'Admin', 
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23' 
  });

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBlog(newBlog);
    setShowBlogModal(false);
    setNewBlog({ 
      title: '', 
      content: '', 
      author: 'Admin', 
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23' 
    });
  };

  const exportLeads = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Interest', 'Type', 'Date'];
    const rows = leads.map(l => [
      l.name, l.email, l.phone, l.company, l.interest, l.type, l.timestamp
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Albion_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.interest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-20 shadow-2xl">
        <div className="p-8 border-b border-slate-800">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3 font-bold text-white">A</div>
            <span className="text-xl font-bold text-white tracking-tight">Control Center</span>
          </div>
          <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Internal Portal</div>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${activeTab === 'leads' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Users className="w-5 h-5 mr-4" /> 
            <span className="font-semibold">Leads & CRM</span>
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center px-6 py-4 rounded-xl transition-all duration-200 ${activeTab === 'blogs' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <FileText className="w-5 h-5 mr-4" /> 
            <span className="font-semibold">Site Content</span>
          </button>
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="bg-slate-800/50 p-4 rounded-2xl mb-6">
            <div className="text-xs text-slate-500 font-bold uppercase mb-1">Authenticated As</div>
            <div className="text-sm font-bold text-white">System Administrator</div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center px-6 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors font-bold"
          >
            <LogOut className="w-5 h-5 mr-4" /> Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-72 p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 capitalize heading-font">{activeTab}</h2>
            <p className="text-slate-500 mt-1">Manage {activeTab === 'leads' ? 'sales inquiries and technical prospects' : 'educational resources and news'}.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {activeTab === 'leads' && (
              <>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search leads..."
                    className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 w-64 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={exportLeads}
                  disabled={leads.length === 0}
                  className="bg-white text-slate-700 border border-slate-200 px-6 py-2.5 rounded-xl font-bold flex items-center hover:bg-slate-50 transition-all disabled:opacity-50"
                >
                  <Download className="w-4 h-4 mr-2" /> Export CSV
                </button>
              </>
            )}
            {activeTab === 'blogs' && (
              <button
                onClick={() => setShowBlogModal(true)}
                className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold flex items-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                <Plus className="w-5 h-5 mr-2" /> Create Post
              </button>
            )}
          </div>
        </header>

        {activeTab === 'leads' && (
          <div className="space-y-8">
            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{leads.length}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Inquiries</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {leads.filter(l => l.timestamp.includes(new Date().toLocaleDateString())).length}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Received Today</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                  <Download className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {leads.filter(l => l.type === 'brochure').length}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Brochure Requests</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mr-4">
                  <Filter className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SLA Compliance</div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lead Details</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Organization</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Topic of Interest</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Submission Date</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="font-bold text-slate-900 text-base">{lead.name}</div>
                        <div className="flex flex-col space-y-1 mt-1">
                          <div className="text-xs text-slate-500 flex items-center">
                            <Mail className="w-3 h-3 mr-2 text-slate-400" /> {lead.email}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center">
                            <Phone className="w-3 h-3 mr-2 text-slate-400" /> {lead.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm text-slate-700 font-bold flex items-center">
                          <Building className="w-4 h-4 mr-2 text-blue-600/40" /> {lead.company}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col items-start">
                          <span className="px-3 py-1 bg-white border border-blue-100 text-blue-700 rounded-lg text-[11px] font-bold shadow-sm">
                            {lead.interest}
                          </span>
                          <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${lead.type === 'brochure' ? 'text-orange-600' : 'text-indigo-600'}`}>
                            {lead.type === 'brochure' ? '• Marketing Qualified' : '• Sales Qualified'}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                        {lead.timestamp}
                      </td>
                      <td className="px-8 py-6">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-all">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-slate-100 p-4 rounded-full mb-4">
                            <Search className="w-8 h-8 text-slate-300" />
                          </div>
                          <p className="text-slate-400 font-medium">No inquiries matching your criteria.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                <div className="relative h-56">
                  <img src={blog.image} alt={blog.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                    <Calendar className="w-3 h-3 mr-1" /> {blog.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">{blog.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">{blog.content}</p>
                </div>
                <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-700 mr-2">A</div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{blog.author}</span>
                  </div>
                  <button 
                    onClick={() => onDeleteBlog(blog.id)}
                    className="p-2 text-slate-300 hover:text-red-600 hover:bg-white rounded-lg transition-all"
                    title="Delete Post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <div className="col-span-full py-40 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <div className="flex flex-col items-center">
                  <FileText className="w-12 h-12 text-slate-200 mb-4" />
                  <p className="text-slate-400 font-bold text-xl">No Published Content</p>
                  <button 
                    onClick={() => setShowBlogModal(true)}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                  >
                    Create your first post
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Blog Modal */}
        {showBlogModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <div className="px-12 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 heading-font">New Publication</h3>
                  <p className="text-xs text-slate-500 font-medium">Add technical content to the company library.</p>
                </div>
                <button 
                  onClick={() => setShowBlogModal(false)} 
                  className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <LogOut className="w-5 h-5 rotate-180" />
                </button>
              </div>
              <form onSubmit={handleBlogSubmit} className="p-12 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Title</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Feature Image URL</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium"
                    value={newBlog.image}
                    onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">Article Body</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium leading-relaxed"
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                  ></textarea>
                </div>
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(false)}
                    className="flex-grow bg-white border border-slate-200 text-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="flex-grow-[2] bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-600/30 transition-all"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
