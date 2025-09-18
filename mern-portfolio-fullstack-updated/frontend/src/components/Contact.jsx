import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setServerMsg('');

  try {
    const res = await fetch(
      'https://mern-portfolio-backend.onrender.com/api/form',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Something went wrong');

    setServerMsg('✅ Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  } catch (err) {
    console.error(err);
    setServerMsg(`❌ ${err.message}`);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="max-w-900 mx-auto p-4">
      <h2 className="text-4xl font-bold mb-9">Contact</h2>
      <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 space-y-5"
>
  <h2 className="text-2xl font-bold text-center text-indigo-700">
    Contact Me
  </h2>
  <p className="text-center text-gray-600 text-sm">
    I’d love to hear from you! Fill out the form below and I’ll get back to you soon.
  </p>

  {/* Name */}
  <div>
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
      Your Name
    </label>
    <input
      id="name"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Enter your name"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow shadow-sm"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
      Your Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow shadow-sm"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Write your message here..."
      required
      rows="6"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow shadow-sm resize-none"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform disabled:opacity-60"
  >
    {isSubmitting ? 'Sending…' : 'Send Message'}
  </button>
</form>

      {serverMsg && (
        <p
          className={`mt-3 ${
            serverMsg.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {serverMsg}
        </p>
      )}
    </section>
  );
}