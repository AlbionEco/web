
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TechnologyDetail from './pages/TechnologyDetail';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import WhyAlbion from './pages/WhyAlbion';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { Lead, Blog } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Load mock data from localStorage
  useEffect(() => {
    const savedLeads = localStorage.getItem('albion_leads');
    if (savedLeads) setLeads(JSON.parse(savedLeads));

    const savedBlogs = localStorage.getItem('albion_blogs');
    if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
    
    const auth = localStorage.getItem('albion_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const addLead = (lead: Omit<Lead, 'id' | 'timestamp'>) => {
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleString()
    };
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('albion_leads', JSON.stringify(updated));
  };

  const addBlog = (blog: Omit<Blog, 'id' | 'date'>) => {
    const newBlog: Blog = {
      ...blog,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString()
    };
    const updated = [newBlog, ...blogs];
    setBlogs(updated);
    localStorage.setItem('albion_blogs', JSON.stringify(updated));
  };

  const deleteBlog = (id: string) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    localStorage.setItem('albion_blogs', JSON.stringify(updated));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('albion_auth');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addLead={addLead} />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology/:id" element={<TechnologyDetail addLead={addLead} />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-albion" element={<WhyAlbion />} />
            <Route path="/contact" element={<Contact addLead={addLead} />} />
            <Route path="/downloads" element={<Downloads addLead={addLead} />} />
            
            {/* Hidden Admin Routes */}
            <Route 
              path="/control-center" 
              element={isAuthenticated ? <Navigate to="/control-center/dashboard" /> : <AdminLogin onLogin={() => setIsAuthenticated(true)} />} 
            />
            <Route 
              path="/control-center/dashboard" 
              element={isAuthenticated ? <AdminDashboard leads={leads} blogs={blogs} onAddBlog={addBlog} onDeleteBlog={deleteBlog} onLogout={handleLogout} /> : <Navigate to="/control-center" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
