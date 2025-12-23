
import { Lead, Blog } from '../types';

// Use relative URL for Vercel rewrites to work correctly
const API_BASE_URL = '/api';

export const apiService = {
  // LEADS API
  async getLeads(): Promise<Lead[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
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
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { ...data, id: data._id };
    } catch (error) {
      console.error('API Error (saveLead):', error);
      // Fallback for offline or error states
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
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
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
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
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
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { ...data, id: data._id };
    } catch (error) {
      console.error('API Error (saveBlog):', error);
      throw error;
    }
  }
};
  