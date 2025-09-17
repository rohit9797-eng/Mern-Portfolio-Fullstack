import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Contact from './models/Contact.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Use only one connection string
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb+srv://rohitmeher513_db_user:Jxnb4kM5csnekQk2@test-portfolio-db.wkqh5js.mongodb.net/mernstack?retryWrites=true&w=majority';

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ✅ Routes
app.get('/', (req, res) => res.send('Backend up'));

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

// ✅ Single Mongoose connection
mongoose
  .connect(MONGO_URI) // No deprecated options needed in v6+
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
