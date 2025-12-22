
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// DATABASE SCHEMAS
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  interest: String,
  message: String,
  type: { type: String, enum: ['contact', 'brochure'], default: 'contact' },
  timestamp: { type: Date, default: Date.now }
});

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Albion Team' },
  image: { type: String, default: '' },
  date: { type: String, default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }
});

const Lead = mongoose.model('Lead', LeadSchema);
const Blog = mongoose.model('Blog', BlogSchema);

// API ROUTES
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ timestamp: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Article not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// SERVER INITIALIZATION
// Only connect and listen if we are not in a Vercel/serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('✓ Connected to MongoDB');
      if (require.main === module) {
        app.listen(PORT, () => console.log(`✓ Server running on http://localhost:${PORT}`));
      }
    })
    .catch(err => console.error('CRITICAL ERROR: Connection Failed', err));
} else {
  // In Vercel, we just need to connect once
  mongoose.connect(MONGODB_URI);
}

// Export the app for Vercel's serverless handler
module.exports = app;
