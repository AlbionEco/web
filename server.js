import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const router = express.Router();
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

// Guard against model re-definition
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

let cachedDb = null;
const connectToDatabase = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) return cachedDb;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing');
  if (mongoose.connection.readyState === 2) return mongoose.connection.asPromise();
  cachedDb = await mongoose.connect(uri, { bufferCommands: false });
  return cachedDb;
};

router.post('/leads', async (req, res) => {
  try {
    await connectToDatabase();
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/leads', async (req, res) => {
  try {
    await connectToDatabase();
    const leads = await Lead.find().sort({ timestamp: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/blogs', async (req, res) => {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().sort({ _id: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/blogs', async (req, res) => {
  try {
    await connectToDatabase();
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/health', (req, res) => res.json({ status: 'UP' }));

app.use('/api', router);
app.use('/', router);

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`✓ Server: http://localhost:${PORT}`));
  }).catch(console.error);
}

export default app;