import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link
      to={to}
      className={
        "px-3 py-2 rounded-md text-sm font-medium " +
        (active
          ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
          : "text-gray-700 hover:text-indigo-600")
      }
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
            RM
          </div>
          <div>
            <div className="text-lg font-semibold">Rohit Meher</div>
            <div className="text-xs text-gray-500">Full Stack Developer</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer px-3 py-2 rounded-md">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow p-2 flex flex-col">
              <Link className="py-1" to="/">Home</Link>
              <Link className="py-1" to="/about">About</Link>
              <Link className="py-1" to="/projects">Projects</Link>
              <Link className="py-1" to="/resume">Resume</Link>
              <Link className="py-1" to="/contact">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}