import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function bar() {
  return (
    <div className="flex flex-col items-center mt-8 space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-8 text-white mb-20">
          <Link to='/codingProfile'>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Coding Profiles</motion.button>
          </Link>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Projects</motion.button>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Resume</motion.button>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Contact me</motion.button>
        </div>
  )
}

export default bar