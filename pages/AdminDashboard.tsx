
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import { 
  Users, FileText, LogOut, Plus, Trash2, 
  X, Image as ImageIcon, Upload
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [newBlog, setNewBlog] = useState({ 
    title: '', 
    content: '', 
    author: 'Albion Editorial', 
    image: '' 
  });

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBlog({ ...newBlog, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.image) {
      alert("Please select a cover image for the blog.");
      return;
    }
    onAddBlog(newBlog);
    setShowBlogModal(false);
    setNewBlog({ 
      title: '', 
      content: '', 
      author: 'Albion Editorial', 
      image: '' 
    });
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-20 shadow-2xl">
        <div className="p-8 border-b border-slate-800 text-center">
            <img src="/images/Albion_high_-_logo-removebg-preview.png" alt="Logo" className="w-40 mx-auto mb-2 invert brightness-0" />
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Control Center</div>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <button onClick={() => setActiveTab('leads')} className={`w-full flex items-center px-6 py-4 rounded-xl transition-all ${activeTab === 'leads' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <Users className="w-5 h-5 mr-4" /> <span className="font-semibold">Leads CRM</span>
          </button>
          <button onClick={() => setActiveTab('blogs')} className={`w-full flex items-center px-6 py-4 rounded-xl transition-all ${activeTab === 'blogs' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <FileText className="w-5 h-5 mr-4" /> <span className="font-semibold">Site Content</span>
          </button>
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button onClick={onLogout} className="w-full flex items-center px-6 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors font-bold">
            <LogOut className="w-5 h-5 mr-4" /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-grow ml-72 p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 heading-font capitalize">{activeTab}</h2>
            <p className="text-slate-500">Manage internal data and public educational resources.</p>
          </div>
          {activeTab === 'blogs' && (
            <button onClick={() => setShowBlogModal(true)} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-blue-700">
              <Plus className="w-5 h-5 mr-2" /> Create Rich Post
            </button>
          )}
        </header>

        {activeTab === 'leads' ? (
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
             <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                  <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <th className="px-8 py-5">Prospect</th>
                    <th className="px-8 py-5">Organization</th>
                    <th className="px-8 py-5">Interest</th>
                    <th className="px-8 py-5">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="px-8 py-6">
                        <div className="font-bold">{lead.name}</div>
                        <div className="text-xs text-slate-400">{lead.email}</div>
                      </td>
                      <td className="px-8 py-6 text-sm">{lead.company}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">{lead.interest}</span>
                      </td>
                      <td className="px-8 py-6 text-xs text-slate-400">{lead.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden group flex flex-col">
                <div className="h-48 w-full overflow-hidden">
                   <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={blog.title} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4 line-clamp-1">{blog.title}</h3>
                  <button onClick={() => onDeleteBlog(blog.id)} className="text-red-500 text-sm font-bold flex items-center hover:underline">
                    <Trash2 className="w-4 h-4 mr-1" /> Remove Post
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showBlogModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
              <div className="px-10 py-6 border-b flex justify-between items-center bg-slate-50">
                <h3 className="text-xl font-bold heading-font">Rich Content Creator</h3>
                <button onClick={() => setShowBlogModal(false)}><X className="w-6 h-6 text-slate-400" /></button>
              </div>
              <form onSubmit={handleBlogSubmit} className="flex-grow overflow-y-auto p-10 space-y-8">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Article Headline</label>
                  <input required type="text" placeholder="e.g. The Future of Zero Liquid Discharge" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" value={newBlog.title} onChange={(e) => setNewBlog({...newBlog, title: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Cover Image</label>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                    />
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative aspect-video rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${newBlog.image ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-blue-300'}`}
                    >
                      {newBlog.image ? (
                        <>
                          <img src={newBlog.image} className="w-full h-full object-cover" alt="Preview" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                            <div className="bg-white px-4 py-2 rounded-xl text-xs font-bold flex items-center">
                              <Upload className="w-3.5 h-3.5 mr-2" /> Change Image
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-white p-4 rounded-2xl shadow-sm mb-3">
                            <ImageIcon className="w-8 h-8 text-blue-600" />
                          </div>
                          <span className="text-sm font-bold text-slate-900">Choose Blog Header</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">PNG, JPG or WEBP</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                      <h4 className="text-blue-900 font-bold text-sm mb-2">Publishing Tips</h4>
                      <ul className="text-xs text-blue-700/70 space-y-2 leading-relaxed">
                        <li>• Use H1 for the main heading</li>
                        <li>• Use H2 and H3 for sub-sections to build the TOC</li>
                        <li>• Center images for a professional look</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Article Body</label>
                  <div className="h-96 bg-slate-50 rounded-2xl overflow-hidden border">
                    <ReactQuill 
                      theme="snow" 
                      value={newBlog.content} 
                      onChange={(content: string) => setNewBlog({...newBlog, content})} 
                      modules={quillModules} 
                      className="h-80" 
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-8">
                    <button type="button" onClick={() => setShowBlogModal(false)} className="flex-1 bg-slate-100 py-4 rounded-2xl font-bold text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
                    <button type="submit" className="flex-[2] bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">Publish Site Update</button>
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
