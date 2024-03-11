'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Loginmask from '@/components/login-mask'

const handleLogin = () => {}
export default function Component() {
  return (
    <div className='antialiased'>
      <div>
        <BackgroundBeams />
      </div>
      <Navbar />
      <Loginmask />
    </div>
  )
}
