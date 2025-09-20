import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Configure CORS: allow local dev and production frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000",               // CRA dev server
      "http://localhost:5173",               // Vite dev server
      "https://mern-portfolio-fullstack-msm2.vercel.app/contact", // Production frontend URL
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// ✅ Contact schema & model (timestamps enabled for createdAt/updatedAt)
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);

// ✅ Root route to verify server is running
app.get("/", (req, res) => {
  res.json({ status: "✅ Backend is running" });
});

// ✅ Contact POST route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    res.status(500).json({ error: "Server error, please try again." });
  }
});

// ✅ Optional: Fetch contacts with pagination (useful for admin view)
app.get("/contacts", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    const totalContacts = await Contact.countDocuments();
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      contacts,
      totalContacts,
      currentPage: page,
      totalPages: Math.ceil(totalContacts / limit),
    });
  } catch (err) {
    console.error("❌ Error fetching contacts:", err.message);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// ✅ Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});