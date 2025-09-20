import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AdminContacts from './components/AdminContacts';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content grows to fill space */}
      <main className="flex-grow p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-contacts" element={<AdminContacts />} />
        </Routes>
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}