
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Blog as BlogType } from '../types';

interface BlogDetailProps {
  blogs: BlogType[];
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogs }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-blue-600 font-bold hover:underline">Return to Knowledge Center</Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Article Header */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center text-blue-400 hover:text-white mb-10 transition-colors font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Center
          </button>
          <div className="flex items-center space-x-6 mb-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-blue-500" /> {blog.date}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2 text-blue-500" /> Written by {blog.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight heading-font">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-8 border-white">
          <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover" />
        </div>

        <div className="prose prose-xl prose-slate mx-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center font-bold text-white text-xl">A</div>
              <div>
                <div className="font-bold text-slate-900">Albion Editorial</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Industry Specialist</div>
              </div>
            </div>
            <button className="bg-slate-50 p-4 rounded-2xl text-slate-400 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="text-xl text-slate-700 leading-relaxed font-light space-y-8">
            {blog.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            
            <p>
              In conclusion, the shift towards sustainable water management is not merely an environmental obligation but a strategic business move. Companies that invest in advanced treatment technologies today will be the ones that thrive in the resource-constrained landscape of tomorrow.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
          <h4 className="text-2xl font-bold mb-8 heading-font">Related Industry Solutions</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/technology/x-flocs" className="bg-slate-50 px-8 py-3 rounded-xl font-bold text-slate-700 hover:bg-blue-600 hover:text-white transition-all">MBR Technology</Link>
            <Link to="/technology/u-flocs" className="bg-slate-50 px-8 py-3 rounded-xl font-bold text-slate-700 hover:bg-blue-600 hover:text-white transition-all">Ultrafiltration</Link>
            <Link to="/contact" className="bg-blue-900 px-8 py-3 rounded-xl font-bold text-white hover:bg-blue-800 transition-all">Request Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
