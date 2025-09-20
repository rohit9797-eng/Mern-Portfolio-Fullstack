import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// POST /api/contacts - save contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields are required" });

    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/contacts?page=1&limit=50 - fetch stored contacts
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;

        // Count total contacts for pagination info
    const totalContacts = await Contact.countDocuments();

    // Fetch contacts sorted by newest first
    const contacts = await Contact.find({})
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
    console.error("GET /api/contacts error:", err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

export default router;