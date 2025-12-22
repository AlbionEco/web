
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Blog as BlogType } from '../types';

interface BlogProps {
  blogs: BlogType[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  // Helper to strip HTML tags for the preview text
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 heading-font">Knowledge Center</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Technical insights, industry updates, and expert perspectives on environmental engineering.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 font-bold text-xl">New articles coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.id}`}
                  className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                        Technical
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 mb-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {blog.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {blog.author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight heading-font">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {stripHtml(blog.content)}
                    </p>
                    <div className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest">
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
