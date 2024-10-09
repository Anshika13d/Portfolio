import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function bar() {
  return (
    <div className="flex flex-col items-center mt-8 space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-8 text-white mb-20">
          <Link to='/codingProfile'>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Coding Profiles</motion.button>
          </Link>
          <Link to='/projects'>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Projects</motion.button>
          </Link>
          <a href="https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='_blank'>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Resume</motion.button>
          </a>
          <Link to='/contactMe'>
          <motion.button className='p-4 rounded-full w-40 bg-gradient-to-tr from-slate-900 to-slate-800 hover:bg-gray-700' whileHover={{ scale: 1.1 }}>Contact me</motion.button>
          </Link>
        </div>
  )
}

export default bar