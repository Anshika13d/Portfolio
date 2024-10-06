import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-black to-slate-900">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        
        {/* Main content area */}
        <main className="flex-grow pt-16"> {/* pt-16 adds padding to prevent overlap */}
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contactMe' element={<Contact />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App
