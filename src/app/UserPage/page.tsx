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
        <p className='mx-auto my-auto text-xl font-semibold transition ease-in-out delay-150 hover:scale-105'>Wilkommen -USERNAME-</p>
        <Button className='mx-auto my-auto h-16 w-48 text-xl transition ease-in-out delay-150 hover:scale-105'>Spiel Starten</Button>
      </div>
    </div>
  )
}

export default UserPage
