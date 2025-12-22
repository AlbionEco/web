
import { Lead, Blog } from '../types';

// REPLACE THIS with your deployed backend URL (e.g., https://albion-api.render.com)
// During local development, use: http://localhost:5000/api
const API_BASE_URL = 'http://localhost:5000/api';

export const apiService = {
  // LEADS API
  async saveLead(lead: Omit<Lead, 'id' | 'timestamp'>): Promise<Lead> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error('Failed to save lead');
      const data = await response.json();
      return { ...data, id: data._id }; // Map _id to id
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
      // Map MongoDB _id to frontend id
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
      return { ...data, id: data._id }; // Map _id to id
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
      return { ...data, id: data._id }; // Map _id to id
    } catch (error) {
      console.error('API Error (saveBlog):', error);
      throw error;
    }
  }
};
