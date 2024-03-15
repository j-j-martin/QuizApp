'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'

export default function RegistrationMask() {
  const router = useRouter()
  return (
    <div>
      <Card className='mx-auto max-w-md  mt-64 relative z-3'>
        <CardHeader className='space-y-2 mb-4'>
          <CardTitle className='text-2xl font-bold'>Register</CardTitle>
          <CardDescription>Enter your email and password to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='email adress' required type='email' />
            </div>
            <div className='space-y-4'>
              <div>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' placeholder='password' required type='password' />
              </div>
              <div>
                <Label htmlFor='password'>Repeat Password</Label>
                <Input id='password' placeholder='password' required type='password' />
              </div>
            </div>
            <div>
              <Button className='w-full' type='submit' onClick={() => router.push('/Registration')}>
                Register
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
