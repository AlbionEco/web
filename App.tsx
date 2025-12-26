
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TechnologyOverview from './pages/TechnologyOverview';
import TechnologyDetail from './pages/TechnologyDetail';
import RecyclingOverview from './pages/RecyclingOverview';
import RecyclingDetail from './pages/RecyclingDetail';
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
import MembraneOverview from './pages/MembraneOverview';
import TechDaf from './pages/TechDaf';
import TechAmbbr from './pages/TechAmbbr';
import TechMbr from './pages/TechMbr';
import TechCeraFlocs from './pages/TechCeraFlocs';
import TechUf from './pages/TechUf';
import TechAfm from './pages/TechAfm';
import TechMvr from './pages/TechMvr';
import TechMbbr from './pages/TechMbbr';
import TechSbr from './pages/TechSbr';
import EtpStpproducts from './pages/EtpStpproducts'

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('albion_auth') === 'true');

  const refreshData = async () => {
    // Both now use the apiService which handles relative /api paths
    const [blogData, leadData] = await Promise.all([
      apiService.getBlogs(),
      apiService.getLeads()
    ]);
    
    setBlogs(blogData);
    setLeads(leadData);
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
      alert("Failed to publish blog. Check your connection or login status.");
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
            <Route path="/technologies" element={<TechnologyOverview/>} />
            <Route path="/technology/a-pro-daf" element={<TechDaf addLead={handleAddLead} />} />
            <Route path="/technology/m-flocs" element={<TechAmbbr addLead={handleAddLead} />} />
            <Route path="/technology/x-flocs" element={<TechMbr addLead={handleAddLead} />} />
            <Route path="/technology/c-flocs" element={<TechCeraFlocs addLead={handleAddLead} />} />
            <Route path="/technology/u-flocs" element={<TechUf addLead={handleAddLead} />} />
             <Route path="/technology/:id" element={<TechnologyDetail addLead={handleAddLead} />} />
            <Route path="/recycling" element={<RecyclingOverview/>} />
            <Route path="/recycling/afm" element={<TechAfm addLead={handleAddLead} />} />
            <Route path="/recycling/mvr" element={<TechMvr addLead={handleAddLead} />} />
            <Route path="/recycling/mbbr" element={<TechMbbr addLead={handleAddLead} />} />
            <Route path="/recycling/sbr" element={<TechSbr addLead={handleAddLead} />} />
            <Route path="/recycling/:id" element={<RecyclingDetail addLead={handleAddLead} />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-albion" element={<WhyAlbion />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact addLead={handleAddLead} />} />
            <Route path="/downloads" element={<Downloads addLead={handleAddLead} />} />
            <Route path="/membranes" element={<MembraneOverview />} />
             <Route path="/etpstpproducts" element={<EtpStpproducts addLead={handleAddLead} />} />
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
