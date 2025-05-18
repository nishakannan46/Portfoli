import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Nishanth K</h1>
        <p className="text-lg text-gray-400">Software Engineer</p>
      </header>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-300">
          Welcome to my portfolio. I'm Nishanth K, a B.E (CSE) student with a passion for the
          Computer Field. I've developed a strong portfolio that showcases my skills and
          creativity. Take a look around to see my Portfolio Website.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>C</li>
          <li>C++</li>
          <li>Python</li>
          <li>Web Development (Front End)</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Resume</h2>
        <a
          href="/CV - Nishanth K.pdf"
          download
          className="text-blue-400 underline hover:text-blue-600"
        >
          Download My Resume
        </a>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h2>
        <div className="flex flex-col gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={20} /> kannannisha46@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={20} />
            <a
              href="https://www.linkedin.com/in/nishanth-k-a597142a2"
              className="text-blue-400 underline hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
