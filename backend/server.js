
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

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

// Avoid "OverwriteModelError" in serverless environments by checking if the model already exists
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

// Connection helper for Serverless - ensures we only connect once and wait for it
let cachedDb = null;

const connectToDatabase = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  // If already connecting, wait for it
  if (mongoose.connection.readyState === 2) {
    return mongoose.connection.asPromise();
  }

  cachedDb = await mongoose.connect(uri, {
    bufferCommands: false,
  });
  
  return cachedDb;
};

// API ROUTES
app.post('/api/leads', async (req, res) => {
  try {
    await connectToDatabase();
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    console.error('Lead Post Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    await connectToDatabase();
    const leads = await Lead.find().sort({ timestamp: -1 });
    res.json(leads);
  } catch (err) {
    console.error('Lead Fetch Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
  } catch (err) {
    console.error('Blog Fetch Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Article not found' });
    res.json(blog);
  } catch (err) {
    console.error('Blog Detail Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    await connectToDatabase();
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error('Blog Save Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Health check route
app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK' }));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// SERVER INITIALIZATION (Local only)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`✓ Local server running on http://localhost:${PORT}`));
  }).catch(err => {
    console.error('Failed to start local server:', err);
  });
}

export default app;
