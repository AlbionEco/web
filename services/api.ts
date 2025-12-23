
import { Lead, Blog } from '../types';

const API_BASE_URL = 'https://web-0tqb.onrender.com/api';

export const apiService = {
  // LEADS API
  async getLeads(): Promise<Lead[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`);
      if (!response.ok) throw new Error('Failed to fetch leads');
      const data = await response.json();
      return data.map((lead: any) => ({
        ...lead,
        id: lead._id
      }));
    } catch (error) {
      console.error('API Error (getLeads):', error);
      return [];
    }
  },

  async saveLead(lead: Omit<Lead, 'id' | 'timestamp'>): Promise<Lead> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error('Failed to save lead');
      const data = await response.json();
      return { ...data, id: data._id };
    } catch (error) {
      console.error('API Error (saveLead):', error);
      return { 
        ...lead, 
        id: Math.random().toString(36).substr(2, 9), 
        timestamp: new Date().toLocaleString() 
      } as Lead;
    }
  },

  // BLOGS API
  async getBlogs(): Promise<Blog[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      return data.map((blog: any) => ({
        ...blog,
        id: blog._id
      }));
    } catch (error) {
      console.error('API Error (getBlogs):', error);
      return []; 
    }
  },

  async getBlogById(id: string): Promise<Blog | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
      if (!response.ok) throw new Error('Blog not found');
      const data = await response.json();
      return { ...data, id: data._id };
    } catch (error) {
      console.error('API Error (getBlogById):', error);
      return null;
    }
  },

  async saveBlog(blog: Omit<Blog, 'id' | 'date'>): Promise<Blog> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      if (!response.ok) throw new Error('Failed to save blog');
      const data = await response.json();
      return { ...data, id: data._id };
    } catch (error) {
      console.error('API Error (saveBlog):', error);
      throw error;
    }
  }
};
