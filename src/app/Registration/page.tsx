'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import RegistrationMask from '@/components/registration-mask'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Component() {
  return (
    <div>
      <BackgroundBeams />
      <div>
        <Navbar />
        <RegistrationMask />
      </div>
    </div>
  )
}
