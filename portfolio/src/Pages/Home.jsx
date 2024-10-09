import React from 'react'
import profile from '../assets/profile.jpg'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import About from './About'
import Bar from '../components/Bar'
import Skills from './Skills'

function Home() {
  return (
    <>
    <div className='text-white h-screen flex items-center justify-center'>
        <motion.div animate={{ y: -100 }} transition={{ duration: 0.5 }} className='flex flex-col ml-14 justify-center'>
            <h1 className='text-5xl font-semibold '>Hey! I'm Anshika Das</h1>
            <br />
            <p className='text-2xl'>I'm a Full Stack Developer</p>
            <br />
            <div className='flex space-x-6'>
              <a href='https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor'
              target='_blank'>
                <button className='p-4 rounded-full w-32 bg-gradient-to-tr from-slate-900 to-slate-800'>Resume</button>
              </a>
              <Link to='/contactMe'>
                <button className='p-4 rounded-full w-32 bg-gradient-to-tr from-slate-900 to-slate-800'>Contact me</button>
              </Link>
            </div>
        </motion.div>
        <div className=' flex justify-center text-center w-1/2'>
            <img src={profile} alt="" className="rounded-full justify-center max-w-md h-auto" />
        </div>

       
    </div>

    <hr className='mb-8 border-gray-500 ' />

    <About />
    <hr className='mb-8 border-gray-500 ' />

    <Skills />
    <hr className='mb-8 border-gray-500 ' />

    <Bar/>
    </>
  )
}

export default Home