'use client'

import Loginmask from '@/components/login-mask'
import Navbar from '@/components/navbar'
import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './loginpage.module.css'

export default function Page() {
  // const { user } = await validateRequest()
  // if (user) {
  //   return redirect('/')
  // }
  const target = new Date('2024-07-01T00:00:00').getTime()
  const calculateTimeDifference = () => {
    const currentTime = new Date().getTime()
    const difference = target - currentTime

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
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
      <div className={styles.countdownDiv}>
        <h1 className={styles.countdownHeading}>Zeit bis Shirleys 30sten:</h1>
        <div className={styles.splitContainer}>
          <div className={styles.numberColumn}>
            <p className={styles.countdownParagraph}>{counter.days}</p>
            <p className={styles.countdownParagraph}>{counter.hours}</p>
            <p className={styles.countdownParagraph}>{counter.minutes}</p>
            <p className={styles.countdownParagraph}>{counter.seconds}</p>
          </div>
          <div className={styles.textColumn}>
            <p className={styles.countdownParagraph}>Tage</p>
            <p className={styles.countdownParagraph}>Stunden</p>
            <p className={styles.countdownParagraph}>Minuten</p>
            <p className={styles.countdownParagraph}>Sekunden</p>
          </div>
        </div>
        <img alt='hello' src={'/troll-inverted.png'} width={500} height={500} />
      </div>
      {/* <Loginmask /> */}
    </div>
  )
}
