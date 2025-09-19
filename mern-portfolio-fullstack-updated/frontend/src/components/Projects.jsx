import React from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.avif';
import project3 from '../images/project3.png';

// ✅ Project Data with Different Images
const data = [
  {
    title: 'E-commerce website',
    desc: 'A modern e-commerce platform that allows users to browse products, add items to their cart, and securely checkout. Built with a responsive design, product search and filtering, and an intuitive UI for a seamless shopping experience.',
    github: '#',
    image: project1, // ✅ Image 1
  },
  {
    title: 'Chatify - Real-time-chat-app',
    desc: 'Chatify is a real-time messaging application that enables users to chat instantly in private or group conversations. It features live typing indicators, message delivery status, and a responsive UI, built using Node.js for low-latency communication.',
    github: '#',
    image: project2, // ✅ Image 2
  },
  {
    title: 'Library Management System',
    desc: 'A Library Management System developed in Advanced Java using NetBeans IDE, featuring Swing-based GUI for an intuitive interface, JDBC for database connectivity, and robust modules for managing books, members, issue/return records, and fine calculation. Designed for efficient library operations with a user-friendly experience.',
    github: '#',
    image: project3, // ✅ Image 3
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-9">Projects</h2>
      <p className="text-gray-600 mt-2">
        Selected projects with short descriptions and links.
      </p>

      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((p, idx) => (
          <article
            key={idx}
            className="card p-4 rounded-lg shadow-sm flex flex-col bg-white"
          >
            {/* ✅ Project Image */}
            <div className="h-40 w-full rounded-md bg-indigo-50 flex items-center justify-center overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ✅ Project Info */}
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2 flex-1">{p.desc}</p>

            {/* ✅ Buttons */}
            <div className="mt-4 flex gap-2">
              <a
                href={p.github}
                className="text-sm px-3 py-2 border rounded-md hover:bg-indigo-100 transition"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm px-3 py-2 rounded-md bg-indigo-50 hover:bg-indigo-100 transition"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
