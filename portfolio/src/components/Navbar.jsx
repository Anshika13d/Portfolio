import React from 'react'
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=''>
        
    <nav className="bg-inherit shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between text-slate-400 items-center p-4">
        <Link to='/home'>
            <div className="text-2xl font-bold">Anshika Das</div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to='/home' className="hover:text-gray-200 transition">Home</Link>
          <Link to='/about' className="hover:text-gray-200 transition">About</Link>
          <Link to='/projects' className="hover:text-gray-200 transition">Projects</Link>
          <Link to='https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor' className="hover:text-gray-200 transition">Resume</Link>
          <Link to='/contactMe' className="hover:text-gray-200 transition">Contact Me</Link>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            to='/home'
            className="block px-4 py-2 text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to='/about'
            className="block px-4 py-2 text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to='/projects'
            className="block px-4 py-2 text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <a
            href="https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            className="block px-4 py-2 text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <Link
            to='/contactMe'
            className="block px-4 py-2 text-center hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar