import Loginmask from '@/components/login-mask'
import Navbar from '@/components/navbar'
import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

export default async function Page() {
  // const { user } = await validateRequest()
  // if (user) {
  //   return redirect('/')
  // }
  const target = new Date('2024-12-31T23:59:59').getTime()
  const calculateTimeDifference = () => {
    const currentTime = new Date().getTime()
    const difference = target - currentTime
    return Math.floor((difference % (1000 * 60)) / 1000)
  }

  const [counter, setCounter] = useState(calculateTimeDifference())

  // Third Attempts
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(calculateTimeDifference())
    }, 1000)

    return () => clearInterval(timer)
  }, [counter])
  return (
    <div className='antialiased'>
      <Navbar />
      Sekunden bis Shirleys 30: {counter}
      {/* <Loginmask /> */}
    </div>
  )
}
