import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  // 👉 Change this to your deployed Render backend URL
// Use local backend for dev and Render for production
  const BACKEND_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/contact"
      : "https://mern-portfolio-fullstack.onrender.com/contact";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerMsg("");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Attempt to parse JSON safely
      let data = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid JSON response");
      }

      console.log("Response status:", res.status, "Data:", data);

      if (res.ok && data.success) {
        setServerMsg("✅ Message submitted successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setServerMsg(data.error || "❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("❌ Submission error:", err);
      setServerMsg("❌ Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

   return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Contact Me
        </h2>

        {serverMsg && (
          <p
            className={`text-center mb-4 font-medium ${
              serverMsg.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {serverMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition transform hover:scale-[1.02] active:scale-95"
          >
            {isSubmitting ? "Submitting..." : "Submit Contact"}
          </button>
        </form>
      </div>
    </section>
  );
}