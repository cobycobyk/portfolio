import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
      animate={{
        scale: [1, 2, 2, 3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
      <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650] w-[650] absolute mt-52 animate-pulse'/>
      <div className='rounded-full border border-[#333333] opacity-20 h-[850] w-[850] absolute mt-52 animate-pulse'/>
      <div />
    </motion.div>
  )
}

export default BackgroundCircles