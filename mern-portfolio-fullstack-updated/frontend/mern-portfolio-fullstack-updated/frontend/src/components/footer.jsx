import React from "react";

export default function Footer() {
  return (
    <>
      {/* Optional separators above footer */}
      <hr className="text-gray-900 my-4" />
      <hr className="text-gray-700 my-3" />
      <hr className="text-gray-900 my-4" />

      <footer className="text-center text-gray-800 py-1">
        {/* Portfolio Heading */}
        <h3
          className="hover:text-violet-900 text-2xl font-semibold pt-4"
          data-aos="fade-up" 
        >
          Rohit's Portfolio
        </h3>

        {/* Navigation Links */}
        <div
          className="flex flex-wrap justify-center items-center gap-4 mt-5"
          data-aos="fade-up"
        >
          <a href="/home" className="hover:text-violet-900 transition font-semibold">Home</a>
          <div className="w-px h-5 bg-blue-900"></div>
          <a href="/about" className="hover:text-violet-900 transition font-semibold">About</a>
          <div className="w-px h-5 bg-blue-900"></div>
          <a href="/projects" className="hover:text-violet-900 transition font-semibold">Projects</a>
          <div className="w-px h-5 bg-blue-900"></div>
          <a href="/resume" className="hover:text-violet-900 transition font-semibold">Resume</a>
          <div className="w-px h-5 bg-blue-900"></div>
          <a href="/contact" className="hover:text-violet-900 transition font-semibold">Contact</a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-9 mt-9 text-2xl"
          data-aos="fade-up"
        >
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-green-500">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/rohit9797-eng" target="_blank" rel="noreferrer" className="hover:text-gray-900">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rohitmeher/" target="_blank" rel="noreferrer" className="hover:text-blue-700">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:rohitmeher513@gmail.com" className="hover:text-red-500">
            <i className="fas fa-envelope-open"></i>
          </a>
        </div>

        <hr className="text-gray-900 my-4" />

        {/* Footer Text */}
        <p className="text-sm max-w-2xl mx-auto px-1">Thank you for visiting my portfolio. I hope it gives you insight into my potential and passion for Web Development.</p>

        <hr className="text-gray-900 my-4" />
      </footer>
    </>
  );
}