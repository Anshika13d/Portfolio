import React from 'react';
import profile from '../assets/profile.jpg';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import About from './About';
import Bar from '../components/Bar';
import Skills from './Skills';

function Home() {
  return (
    <>
      <div className='text-white h-screen flex flex-col lg:flex-row items-center justify-center lg:space-x-28 px-6'>
        <motion.div
          animate={{ y: -50 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:mt-8 md:mt-8 justify-center items-center lg:items-start'
        >
          <h1 className='text-3xl  lg:text-5xl font-semibold text-center lg:text-left'>Hey! I'm Anshika Das</h1>
          <br />
          <p className='text-lg lg:text-2xl text-center lg:text-left'>I'm a Full Stack Developer</p>
          <br />
          <div className='flex space-x-6'>
            <a href='https://www.canva.com/design/DAF7PMuxOAc/xrkVs_4d2kFtrIQ9BehuXA/view?utm_content=DAF7PMuxOAc&utm_campaign=designshare&utm_medium=link&utm_source=editor'
              target='_blank'>
              <button className='p-4 rounded-full w-32 bg-gradient-to-tr from-slate-900 to-slate-800'>
                Resume
              </button>
            </a>
            <Link to='/contactMe'>
              <button className='p-4 rounded-full w-32 bg-gradient-to-tr from-slate-900 to-slate-800'>
                Contact me
              </button>
            </Link>
          </div>
        </motion.div>
        <div className='flex justify-center mt-8 lg:mt-0'>
          <img src={profile} alt="Profile" className="rounded-full max-w-xs lg:max-w-md h-auto" />
        </div>
      </div>

      <hr className='mb-8 border-gray-500 ' />

      <About />
      <hr className='mb-8 border-gray-500 ' />

      <Skills />
      <hr className='mb-8 border-gray-500 ' />

      <Bar />
    </>
  );
}

export default Home;
