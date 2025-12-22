
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Loader2, List, ArrowRight } from 'lucide-react';
import { Blog as BlogType } from '../types';
import { apiService } from '../services/api';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);

  // Extract headings for Table of Contents
  const toc = useMemo(() => {
    if (!blog?.content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h1, h2'));
    
    return headings.map((h, index) => {
      const id = `heading-${index}`;
      h.setAttribute('id', id); // We don't modify the source here, just mapping
      return {
        id,
        text: h.textContent || '',
        level: h.tagName.toLowerCase()
      };
    });
  }, [blog?.content]);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      setLoading(true);
      const data = await apiService.getBlogById(id);
      setBlog(data);
      setLoading(false);
      window.scrollTo(0, 0);
    };
    fetchBlog();
  }, [id]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <div className="py-40 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Knowledge Base...</p>
      </div>
    );
  }

  if (!blog) return null;

  // Function to inject IDs into the HTML content for TOC linking
  const getProcessedContent = () => {
    if (!blog.content) return '';
    let processed = blog.content;
    const parser = new DOMParser();
    const doc = parser.parseFromString(processed, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    headings.forEach((h, index) => {
      h.id = `heading-${index}`;
    });
    return doc.body.innerHTML;
  };

  return (
    <div className="bg-white pb-24">
      {/* Article Header */}
      <div className="bg-slate-900 py-24 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/blog')} className="flex items-center text-blue-400 hover:text-white mb-10 font-bold text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </button>
          <div className="flex items-center space-x-6 mb-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-blue-500" /> {blog.date}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2 text-blue-500" /> {blog.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight heading-font max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="flex items-center mb-6 text-slate-900">
                <List className="w-5 h-5 mr-3 text-blue-600" />
                <h4 className="font-bold text-sm uppercase tracking-widest">Table of Contents</h4>
              </div>
              <nav className="space-y-4">
                {toc.length > 0 ? toc.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={`block text-left text-sm transition-all hover:text-blue-600 ${item.level === 'h3' ? 'pl-4 text-slate-500' : 'font-bold text-slate-700'}`}
                  >
                    {item.text}
                  </button>
                )) : (
                  <p className="text-xs text-slate-400 italic">No sub-headings found in this article.</p>
                )}
              </nav>
              <div className="mt-10 pt-8 border-t border-slate-200">
                <Link to="/contact" className="group flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                  Talk to an Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-9 bg-white">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-8 border-white bg-slate-100">
              <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover" />
            </div>

            <div 
              className="blog-content max-w-none prose prose-slate"
              dangerouslySetInnerHTML={{ __html: getProcessedContent() }}
            />

            <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center font-bold text-white">A</div>
                  <div>
                    <div className="font-bold text-slate-900">Albion Engineering Editorial</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Technical Division</div>
                  </div>
                </div>
                <button className="flex items-center bg-slate-50 px-6 py-3 rounded-xl text-slate-600 font-bold text-sm hover:bg-blue-50 hover:text-blue-600 transition-all">
                  <Share2 className="w-4 h-4 mr-2" /> Share Article
                </button>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
