import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion"
import CodingProfiles from './Pages/CodingProfiles';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-tr from-black to-slate-900 min-h-screen flex flex-col">
        
      <nav className="bg-inherit">
        <div className="container mx-auto flex justify-between items-center p-4 text-slate-400">
          <Link to='/'>
            <div className="text-2xl font-bold text-white">Anshika Das</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to='/' className="hover:text-gray-200 transition">Home</Link>
            <Link to='/about' className="hover:text-gray-200 transition">About</Link>
            <Link to='/projects' className="hover:text-gray-200 transition">Projects</Link>
            <a 
              href='https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor' 
              className="hover:text-gray-200 transition"
              target='_blank'
            >
              Resume
            </a>
            <Link to='/contactMe' className="hover:text-gray-200 transition">Contact Me</Link>
            <Link to='/codingProfile' className="hover:text-gray-200 transition">Coding Profiles</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
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
          <div className="md:hidden bg-black text-white">
            <Link
              to='/'
              className="block px-4 py-2 text-center hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to='/about'
              className="block px-4 py-2 text-center hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to='/projects'
              className="block px-4 py-2 text-center hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <a
              href="https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="block px-4 py-2 text-center hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
              target='_blank'
            >
              Resume
            </a>
            <Link
              to='/contactMe'
              className="block px-4 py-2 text-center hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </nav>
        
        {/* Main content area */}
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contactMe' element={<Contact />} />
          <Route path='/codingProfile' element={<CodingProfiles/>}/>
        </Routes>

        

        

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
