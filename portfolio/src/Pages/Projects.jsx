import React from 'react'
import codePulse from '../assets/codePulse.png'
import DevDiaries from '../assets/DevDiaries.png'
import expense from '../assets/expense.png'
import apvc from '../assets/apvc.png'
import { motion } from 'framer-motion'
import picport from '../assets/picport.png'
import videoStramApp from '../assets/videoStramApp.png'
import travel from '../assets/Screenshot 2023-10-18 121240.png'
import todoapp from '../assets/todoapp.png'

function Projects() {
  return (
    <div className='mb-20'>
        <h1 className='text-4xl text-white mb-10 mt-10 text-center'>My Projects</h1>
        <hr className='mb-8 border-gray-500 ' />

        <p className='text-white text-center text-xl'>Here are some of the projects that i worked on</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={codePulse} alt="Leetcode" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">CodePulse</h2>
            <p className='text-sm text-gray-300'>
                Developed an innovative and interactive coding platform that gamifies the learning experience with progressive levels of coding challenges. Utilized the MERN stack and Chai framework for testing the user codes, to build an engaging web application where users must complete coding problems to unlock subsequent levels.
            </p>
            
            <div className='flex space-x-2 mt-6'>
            <a href="https://github.com/Anshika13d/CodePulse" className='w-1/2'>
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}}  className="p-3 rounded-full w-full h-10 bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            
            
            
            </a>
            <a href="https://codepulse-frontend.onrender.com/" className='w-1/2'>
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}}  className="p-3 rounded-full w-full  h-10 bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Live
            </motion.button>
            </a>
            
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={DevDiaries} alt="DevDiaries" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">DevDiaries</h2>
            <p className='text-sm text-gray-300'>Created a full-stack blog platform for developers, enabling knowledge sharing, article reading, and collaboration
to enhance community engagement.
Implemented JWT-based authentication for secure user login and session management, ensuring data security
and user privacy.</p>
            <a href="https://github.com/Anshika13d/DevDiaries">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full mt-9 bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={expense} alt="GitHub" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Expense Tracker</h2>
            <p className='text-sm text-gray-300'>
            Created a responsive and user-friendly Expense Tracker, allowing users to manage, analyze, and visualize their
expenses effectively.
Enhanced financial management for users, by giving them clear insights into their spending and helping them
keep track of their budgets
            </p>
            <div className='flex space-x-2 mt-11'>
            <a href="https://github.com/Anshika13d/Expense-Tracker-App" className='w-1/2'>
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full h-10  bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
            <a href="" className='w-1/2'>
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full h-10 bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Live
            </motion.button>
            </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={picport} alt="picport" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">PicPort</h2>
            <p className='text-sm text-gray-300'> 
            Developed a web application that allows users to upload, share, and explore images. Utilized React.Js  to create a seamless user experience, with features like image upload, search, and user authentication.
            </p>
            <a href="https://github.com/Anshika13d/Picport">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800  mt-5 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={videoStramApp} alt="juzzPlay" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Video Streaming app</h2>
            <p className='text-sm text-gray-300'>
            Developed a video streaming app that allows users to watch and upload videos. Utilized Node.js and Express.js to create a RESTful API for video upload and retrieval, and MongoDB for data storage.
            </p>
            <a href="https://github.com/Anshika13d/Video_Streaming_app">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800  mt-5 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={todoapp} alt="todoapp" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Todo App</h2>
            <p className='text-sm text-gray-300'>
            Created a responsive and user-friendly Todo App, allowing users to manage their tasks efficiently. Utilized React.js to build a dynamic front-end interface with features like task creation, deletion, and filtering
            </p>
            <a href="https://github.com/Anshika13d/Web_development_projects/tree/main/To-do%20list">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800  mt-5 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={travel} alt="Coding Ninjas" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Travel Haven</h2>
            <p className='text-sm text-gray-300'>
            Developed a travel website that allows users to explore destinations, and plan their trips. Utilized HTML, CSS, Bootstrap UI, and JavaScript to create a responsive and visually appealing front-end interface
            </p>
            <a href="https://github.com/Anshika13d/Travel_Haven">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 mt-5 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={apvc} alt="Coding Ninjas" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Amazon Prime Video Clone (Frontend)</h2>
            <p className='text-sm text-gray-300'>
            Developed a clone of the Amazon Prime Video website, using React.js and Tailwind CSS to create a visually appealing and responsive front-end interface. Implemented features like video streaming, user authentication, and search functionality
            </p>
            <a href="https://www.codingninjas.com/studio/profile/8d4d3f43-fe30-4741-b002-d2d12a229c1f">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 mt-5 text-white hover:bg-gray-600 transition">
              Github
            </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects