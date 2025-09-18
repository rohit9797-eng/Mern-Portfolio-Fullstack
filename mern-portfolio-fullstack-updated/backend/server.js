import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow your frontend URL
app.use(cors({ origin: 'https://your-frontend-domain.netlify.app' })); 
// or to allow all during testing:
// app.use(cors());

app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// ✅ Contact schema and route
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: 'All fields are required' });

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
