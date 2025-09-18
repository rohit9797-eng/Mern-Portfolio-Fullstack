// ---------------------- Imports & Setup ----------------------
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from './models/Contact.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ---------------------- MongoDB Connection ----------------------
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://rohitmeher513_db_user:Jxnb4kM5csnekQk2@test-portfolio-db.wkqh5js.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ---------------------- Middleware ----------------------
app.use(cors({ origin:['https://mern-portfolio-fullstack.onrender.com','http://localhost:5173'], methods: ['GET', 'POST']})); // Dev frontend port
app.use(express.json());

// ---------------------- API Routes ----------------------
app.get('/api', (req, res) => res.send('Backend API is running'));

app.post('/api/form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Incoming request:', req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    const duplicate = await Contact.findOne({
      email: email.toLowerCase().trim(),
      message: message.trim(),
    });

    if (duplicate) {
      return res.status(409).json({ error: 'Duplicate submission detected' });
    }

    const doc = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim(),
    });

    await doc.save();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error('POST /api/form error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------------------- Serve React Frontend ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle all other routes by serving React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// ---------------------- Start Server ----------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});