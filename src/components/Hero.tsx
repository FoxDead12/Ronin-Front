import { delay, motion, Variants } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <main className='relative w-full h-screen z-0 bg-gradient-to-tr from-red-700  via-gray-700 to-gray-700 overflow-hidden'>
            <div className='absolute w-[600px] h-[100vh] bg-gray-800 blur-[100px] bg-opacity-40 drop-shadow-md m-auto bottom-0 top-0 left-0 right-0 translate-x-64 -z-50 line'></div>

      <div className='relative w-[80%] h-full m-auto flex flex-col-reverse lg:flex-row items-center justify-center'>
        <div className='relative w-full flex items-center justify-center z-0 mask-container'>
          <motion.img animate={{y: [0, -10, 0]}} transition={{duration: 2.5, repeat: Infinity}} src="/img/mask.png" alt="" className='drop-shadow-lg z-10 -translate-x-4'/>
          <motion.div style={{rotateX: 75}} animate={{y: [0, 10, 0]}} transition={{duration: 2.5, repeat: Infinity}} className='absolute m-auto -bottom-36 left-0 right-0 w-[250px] h-[250px] bg-gray-400 bg-opacity-50 blur-[60px] rounded-full translate-x-4'></motion.div>
          <motion.div className='absolute border-8 border-gray-300 shadow-md h-[80%] w-full md:w-[400px] -translate-y-10'></motion.div>

        </div>

        <div className='w-full flex flex-col items-center lg:items-start justify-center mb-12 lg:mb-0'>
          <div className='relative w-auto flex flex-col items-start md:items-center lg:items-start justify-center rounded-lg'>
            <h3 className='text-4xl md:text-5xl text-white font-normal drop-shadow-lg z-10'>Get Now Your,</h3>
            <NameShop />
          </div>
        </div>
      </div>
    </main>
  )
}


const NameShop = () => {

  const letters = "Ronin";


  const container: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: i * 0.2 }
    })
  };
  
  const child: Variants = {
    visible: {
      opacity: 1,
      y: [0, -25, 0],
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        repeat: Infinity,
        repeatDelay: 2
      }
    },
    hidden: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.h1
    style={{ display: "flex"}}
    variants={container}
    initial="hidden"
    animate="visible"
    className='relative text-[5.5rem] md:text-[9.5rem] text-gray-100 font-bold uppercase tracking-wide mt-0 drop-shadow-lg text-container z-0'
    >
      {letters.split("").map((text: string, index) => {

        return (
          <motion.span className='' style={{userSelect: 'none'}} key={index} variants={child} >
            {text}
          </motion.span>
        )
      })}

    </motion.h1>
  )
}