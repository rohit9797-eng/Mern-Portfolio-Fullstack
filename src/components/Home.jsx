import React, { useEffect } from 'react';
import rohit from '../images/rohit.jpg';

export default function Home() {
  useEffect(() => {
    const textArray = [
      "I'm a Web Developer.",
      "I build responsive websites..!",
      "I'm a Backend Developer."
    ];

    const typedText = document.getElementById("typed-text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50;
    const pauseBetween = 1500;

    function type() {
      const currentText = textArray[textIndex];

      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex--);
      } else {
        typedText.textContent = currentText.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseBetween);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, isDeleting ? 50 : typingSpeed);
      }
    }

    type();
  }, []); // run once on mount

  return (
    <section className="max-w-9xl mx-auto hero-bg rounded-xl p-9 md:p-12 flex flex-col md:flex-row items-center gap-9">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hi — I'm Rohit Meher
        </h1>

        {/* Typing text container */}
        <div className="typewriter">
          <span id="typed-text"></span>
          <span className="cursor">|</span>
        </div>

        <p className="mt-4 text-gray-700 text-lg md:text-xl">
          A passionate {' '}<span className="font-semibold">Full Stack Developer</span> skilled in building dynamic web applications
          using modern technologies like React, Node.js, and MongoDB.
          This portfolio showcases my academic and personal projects, highlighting 
          my ability to design and develop complete web solutions.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/resume"
            className="inline-block px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform"
          >
            Download Resume
          </a>
          <a
            href="/projects"
            className="inline-block px-5 py-3 rounded-md border border-indigo-200 text-indigo-600 font-medium hover:bg-indigo-50"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-72 md:w-66 h-66 rounded-lg bg-gradient-to-tr from-purple-200 to-indigo-100 flex items-center justify-center text-indigo-700">
          <img src={rohit} alt="Rohit" />
        </div>
      </div>
    </section>
  );
}
