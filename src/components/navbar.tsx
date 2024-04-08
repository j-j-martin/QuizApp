import React from 'react'
import { ModeToggle } from './mode-toggle'

function Navbar() {
  return (
    <nav className='font-bold text-xl py-4 px-4 grid grid-cols-2'>
      <div>BrainBuster</div>
      <div className='justify-self-end'>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
