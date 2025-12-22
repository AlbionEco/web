
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * 1. CONFIGURATION
 * It is best practice to use the .env file for the MONGODB_URI.
 * If not using .env, replace the placeholder string below with your Atlas URI.
 */
const MONGODB_URI = process.env.MONGODB_URI;

// 2. MIDDLEWARE
app.use(cors());
// Increased limits for Base64 image strings
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// 3. DATABASE SCHEMAS
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

// 4. API ROUTES

// --- LEADS ENDPOINTS ---
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    console.log(`[Lead] New inquiry from: ${savedLead.email}`);
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

// --- BLOGS ENDPOINTS ---
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

// 5. SERVER INITIALIZATION
if (!MONGODB_URI || MONGODB_URI.includes('your_mongodb_connection_string_here')) {
  console.error('\x1b[31m%s\x1b[0m', '----------------------------------------------------------');
  console.error('\x1b[31m%s\x1b[0m', '  CRITICAL ERROR: MongoDB Connection String is missing!  ');
  console.error('\x1b[31m%s\x1b[0m', '----------------------------------------------------------');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('\x1b[32m%s\x1b[0m', '✓ Successfully connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`✓ Albion Backend is live at: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('\x1b[31m%s\x1b[0m', 'CRITICAL ERROR: Connection Failed');
    console.error(err.message);
    process.exit(1);
  });
