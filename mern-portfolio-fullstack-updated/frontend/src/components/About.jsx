import React from 'react';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-9">About Me</h2>
      <p className="mt-4 text-gray-600 mb-10">
        I'm a passionate and detail-oriented Full Stack Developer with a strong
        foundation in both front-end and back-end technologies. I currently persuing
        my B.Tech in Computer Science from Centurion University Of Technology & Management,
        where I built a solid understanding of web development, data structures, and software 
        engineering principles. My core tech stack includes HTML, CSS, JavaScript, React, Node.js, 
        Express.js, and MongoDB. And I’ve worked on several academic and personal projects that simulate 
        real-world applications. Whether it’s designing responsive user interfaces or building robust APIs, 
        I enjoy the challenge of turning ideas into interactive web solutions. When I’m not coding, 
        I enjoy listening musics, exploring new tech trends or playing Batminton.
      </p>

      {/* Education Section */}
      <div className="space-y-1 mb-10">
        <h3 className="text-2xl font-semibold text-indigo-600">Education</h3>
        <div className="border-l-4 border-indigo-400 pl-4">
          <p className="text-lg max-w-6xl">
            <span className="font-bold">10<sup>th</sup> Grade:</span> I successfully completed my 10<sup>th</sup> in the year 2020 at <span className="font-bold">Little Angels Public
               School, Barpali,</span> with a strong foundation in Science and Mathematics. I have 1st division
               in my Matriculation with a percentage of <span className="font-bold">67.66%</span>.
          </p>
          <div className="flex-shrink-0 flex justify-end">
        <img
          src="src/images/school.jpg"  // Replace with your image path
          alt="Profile"
          className="w-80 h-40 rounded-lg shadow-lg object-cover"
        />
          </div>
          <p className="text-lg mt-5 max-w-6xl">
            <span className="font-bold">12<sup>th</sup> Grade:</span> Graduated in the year 2022
            from <span className="font-bold">Vikash Higher Secondary School, Bargarh,</span> focusing on Physics, Chemistry,
            Mathematics and IT(PCMIT). I have 1st division in my Higher Secondary with a percentage of <span className="font-bold">68.56%</span>.
          </p>

          <div className="flex-shrink-0 flex justify-front">
        <img
          src="src/images/college.jpg"  // Replace with your image path
          alt="Profile"
          className="w-80 h-40 rounded-lg shadow-lg object-cover"
        />
      </div>
          <p className="text-lg mt-5">
            <span className="font-bold">B.Tech (Computer Science Engineering):</span>{" "}
            Currently I am pursuing my B.tech in Computer Science at <span className="font-bold">Centurion University of Technology and Management,Bhubaneswar,</span> where I’m focusing
             on full-stack web development and modern software practices. Through hands-on projects, I’ve developed skills in Java, Advanced Java, PhP, MYSQL, React, Node.js and MongoDB(2022–2026)
          </p>
          <div className="flex-shrink-0 flex justify-center">
        <img
          src="src/images/university.jpg"  // Replace with your image path
          alt="Profile"
          className="w-80 h-40 rounded-lg shadow-lg object-cover"
        />
      </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-indigo-600">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
          <li className="p-3 rounded-lg bg-indigo-200 text-center font-bold">JavaScript</li>
          <li className="p-3 rounded-lg bg-indigo-300 text-center font-bold">Java</li>
          <li className="p-3 rounded-lg bg-indigo-400 text-center font-bold">HTML5 & CSS3</li>
          <li className="p-3 rounded-lg bg-indigo-200 text-center font-bold">MongoDB</li>
          <li className="p-3 rounded-lg bg-indigo-300 text-center font-bold">Node.js & Express</li>
          <li className="p-3 rounded-lg bg-indigo-400 text-center font-bold">React.js</li>
          <li className="p-3 rounded-lg bg-indigo-200 text-center font-bold">RESTful APIs</li>
          <li className="p-3 rounded-lg bg-indigo-300 text-center font-bold">Git & GitHub</li>
          <li className="p-3 rounded-lg bg-indigo-400 text-center font-bold">Tailwind CSS</li>
        </ul>
      </div>

      {/* Interests / Hobbies Section */}
      <div className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-indigo-600">Interests & Hobbies</h3>
        <p className="text-gray-700 leading-relaxed">
          Apart from coding, I enjoy exploring new technologies and contributing to open-source projects. In my free
          time, I love playing Badminton, reading story books, and listening
          to music. I’m also passionate about designing creative UI components
          and continuously improving my problem-solving skills.
        </p>
      </div>

      {/* Additional Info */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-indigo-600">Other Highlights</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Completed several full-stack MERN projects with responsive design.</li>
          <li>Daily solving one problem of Data Structures and Algorithms.</li>
          <li>Team player with good communication and leadership skills.</li>
          <li>Actively learning new technologies.</li>
        </ul>
      </div>
    </section>
  );
}