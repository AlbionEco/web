
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

// Avoid re-compilation of models in serverless
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

// Connection state for serverless
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI missing');
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('✓ MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};


app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// API ROUTES
app.post('/api/leads', async (req, res) => {
  try {
    await connectDB();
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ timestamp: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    await connectDB();
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Article not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    await connectDB();
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'UP' }));

// For local development
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  connectDB().then(() => {
    app.listen(PORT, () => console.log(`✓ Local server: http://localhost:${PORT}`));
  });
}

export default app;