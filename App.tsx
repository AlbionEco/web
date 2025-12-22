
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
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { Lead, Blog as BlogType } from './types';
import { apiService } from './services/api';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('albion_auth') === 'true');

  // Load data from API
  const refreshData = async () => {
    const blogData = await apiService.getBlogs();
    setBlogs(blogData);
    // Note: You might want a getLeads method in apiService for the admin panel
    const response = await fetch('http://localhost:5000/api/leads');
    if (response.ok) {
      const leadData = await response.json();
      setLeads(leadData);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleAddLead = async (lead: Omit<Lead, 'id' | 'timestamp'>) => {
    await apiService.saveLead(lead);
    refreshData();
  };

  const handleSaveBlog = async (blogData: any) => {
    try {
      await apiService.saveBlog(blogData);
      alert("Blog published successfully!");
      refreshData();
    } catch (error) {
      alert("Failed to publish blog. Is the backend running?");
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {!window.location.hash.includes('control-center') && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addLead={handleAddLead} blogs={blogs} />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology/:id" element={<TechnologyDetail addLead={handleAddLead} />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-albion" element={<WhyAlbion />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact addLead={handleAddLead} />} />
            <Route path="/downloads" element={<Downloads addLead={handleAddLead} />} />
            
            {/* Admin Routes */}
            <Route 
              path="/control-center" 
              element={
                isAuthenticated ? (
                  <AdminDashboard 
                    leads={leads} 
                    blogs={blogs} 
                    onAddBlog={handleSaveBlog} 
                    onDeleteBlog={() => {}} 
                    onLogout={() => {
                      localStorage.removeItem('albion_auth');
                      setIsAuthenticated(false);
                    }} 
                  />
                ) : (
                  <AdminLogin onLogin={() => setIsAuthenticated(true)} />
                )
              } 
            />
          </Routes>
        </main>
        {!window.location.hash.includes('control-center') && <Footer />}
      </div>
    </Router>
  );
};

export default App;
