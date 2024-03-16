import { Button } from '@/components/ui/button'
import React from 'react'
import Navbar from '@/components/navbar'
import { BackgroundBeams } from '@/components/ui/background-beams'

const UserPage = () => {
  return (
    <div>
      <BackgroundBeams />
      <Navbar />
      <div className='flex flex-col w-full h-[100vh] content-center relative z-2'>
        
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-600  text-center font-sans font-bold">
          Wilkommen Username
        </h1>
      </div>
        <Button className='mx-auto my-auto h-16 w-48 text-xl transition ease-in-out delay-150 hover:scale-105'>Spiel Starten</Button>
      </div>
    </div>
    
  )
}

export default UserPage
