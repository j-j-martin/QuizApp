import { Label } from '@radix-ui/react-label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Loginmask() {
  const router = useRouter()
  return (
    <Card className='mx-auto max-w-md  mt-64 border-gray-100 relative z-2'>
      <CardHeader className='space-y-2 mb-4'>
        <CardTitle className='text-2xl font-bold'>Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' placeholder='email adress' required type='email' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' placeholder='password' required type='password' />
          </div>
          <div>
            <Button className='w-full mb-4 mt-8' type='submit' onClick={() => router.push('/UserPage')}>
              Login
            </Button>
            <Button variant='outline' className='w-full' type='submit' onClick={() => router.push('/Registration')}>
              Register
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
