import React from 'react'
import leetcode from '../assets/LeetCode.png'
import geeksforgeeks from '../assets/gfg.png'
import github from '../assets/github.png'
import hackerrank from '../assets/hackerrank.png'   
import codingninjas from '../assets/codingNinjas.jpg'
import { motion } from 'framer-motion'

function CodingProfiles() {
  return (
    <div className='mb-20'>
        <h1 className='text-4xl text-white mb-10 mt-10 text-center'>Coding Profiles</h1>
        <hr className='mb-8 border-gray-500 ' />

        <p className='text-white text-center text-xl'>Here are some of the places where you can find me coding</p>
        <div className='mt-10 mr-10 ml-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4'>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={leetcode} alt="Leetcode" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Leetcode</h2>
            <a target='_blank' href="https://leetcode.com/Anshika_D06/">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}}  className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={geeksforgeeks} alt="GeeksForGeeks" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">GeeksForGeeks</h2>
            <a target='_blank' href="https://auth.geeksforgeeks.org/user/anshika_d1/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={github} alt="GitHub" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">GitHub</h2>
            <a target='_blank' href="https://github.com/Anshika13d">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
            
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={hackerrank} alt="HackerRank" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">HackerRank</h2>
            <a target='_blank' href="https://www.hackerrank.com/profile/anshika1366">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
            
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src={codingninjas} alt="Coding Ninjas" />
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <h2 className="text-xl font-bold text-center pb-7 text-gray-200">Coding Ninjas</h2>
            <a target='_blank' href="https://www.codingninjas.com/studio/profile/8d4d3f43-fe30-4741-b002-d2d12a229c1f">
            <motion.button whileHover={{y: -5, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"}} className="p-3 rounded-full w-full bg-gradient-to-t from-gray-700 to-slate-800 text-white hover:bg-gray-600 transition">
              Explore
            </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingProfiles