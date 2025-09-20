import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-9 tracking-tight">
          Resume & Experience
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Download my resume or view it online. Below are some highlights of my experience and skills.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        <a
          href="/assets/Resume_Rohit_Meher.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download Resume
        </a>
        <a
          href="/assets/ROHIT_MEHER_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-200 text-indigo-600 font-medium hover:bg-indigo-50 hover:scale-105 transition-transform duration-300"
        >
          <EyeIcon className="w-5 h-5" />
          View Online (PDF)
        </a>
      </div>

      {/* Experience Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
          <div className="text-sm text-gray-500">2023 — 2024</div>
          <h3 className="text-xl font-semibold mt-2 text-indigo-700">Intern pe — Web Development</h3>
          <p className="mt-3 text-gray-500 font-bold">
            Built and maintained modern, responsive frontend components for a SaaS product. 
            Collaborated with backend teams to integrate APIs and improve performance.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Improved component reusability and reduced build times by 20%.</li>
            <li>Worked with Html, CSS, BootStrap, Php and MYSQL to deliver production features.</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
          <div className="text-sm text-gray-500">2025 — Present</div>
          <h3 className="text-xl font-semibold mt-2 text-indigo-700">InternsElite — MERN STACK Developement</h3>
          <p className="mt-3 text-gray-500 font-bold">
            Designed and developed A responsive full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js)
             to showcase projects, skills, and experience.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li> Features include an interactive front-end, a secure backend for storing contact form submissions, dynamic project sections.</li>
            <li> Deployment on platforms like Netlify/Vercel for the frontend and Render/Heroku for the backend.</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-indigo-900">Skills & Technologies</h3>
        <div className="mt-4 flex flex-wrap gap-3 text-indigo-900">
          {[
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'JavaScript',
            'RESTful APIs',
            'Git & GitHub',
            'HTML5 & CSS3',
            'Java',
            'Advanced Java',
            'PHP',
            'MYSQL'
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-200 hover:text-indigo-500 rounded-full shadow-sm hover:shadow transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}