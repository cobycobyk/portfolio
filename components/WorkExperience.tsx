import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
    whileInView={{opacity: 1}}    
    initial={{opacity: 0}}
    transition={{duration: 1.5}}
      className='h-screen flex flex-col relative text-lft overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience