'use client'

import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Icons } from './ui/icons'
import { useRouter } from 'next/navigation'

export default function Loginmask() {
  const router = useRouter()
  return (
    <div>
      <Card className='z-10 relative max-w-md max-h-lg mx-auto my-auto mt-56 border-style-none'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Noah Stinkt echt dolle und Jermaine ist nicht alt</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid grid-cols-2 gap-6'>
            <Button variant='outline' onClick={() => router.push('/login/github')}>
              <Icons.gitHub className='mr-5 h-6 w-5' />
              Github
            </Button>
            <Button variant='outline'>
              <Icons.google className='mr-2 h-5 w-5' />
              Google
            </Button>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
            </div>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='m@example.com' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full'>
            <Button className='w-full mb-4' onClick={() => router.push('/UserPage')}>
              Login
            </Button>
            <Button variant='outline' className='w-full' onClick={() => router.push('/Registration')}>
              Create Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
