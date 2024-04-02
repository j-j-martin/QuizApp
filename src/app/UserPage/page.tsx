'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'

const UserPage = () => {
  return (
    <div className='flex flex-col w-full h-[100vh] content-center relative z-2'>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          <div className='mb-32'>
            Wilkommen <br /> Username
          </div>
          <Button className='mx-auto my-auto h-16 w-48 text-xl transition ease-in-out delay-150 hover:scale-105'>Spiel Starten</Button>
        </motion.h1>
      </LampContainer>
    </div>
  )
}

export default UserPage
