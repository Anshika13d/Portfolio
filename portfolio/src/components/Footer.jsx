import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        
        <footer className="bg-gradient-to-r from-black to-slate-900 text-white py-8">
            
          <div className="container mx-auto text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-300">
              {/* Left side - Logo and Nav */}
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">Anshika Das</h2>
                <nav className="mt-4 space-x-8">
                  <a href="#home" className="hover:text-gray-200">Home</a>
                  <a href="#about" className="hover:text-gray-200">About</a>
                  <a href="#projects" className="hover:text-gray-200">Projects</a>
                  <a href="#resume" className="hover:text-gray-200">Resume</a>
                  <a href="#contact" className="hover:text-gray-200">Contact Me</a>
                </nav>
              </div>
    
              {/* Right side - Social Icons */}
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                </a>
              </div>
            </div>
            <div className="mt-8 text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Anshika Das. All rights reserved.
            </div>
          </div>
        </footer>
      );
}

export default Footer