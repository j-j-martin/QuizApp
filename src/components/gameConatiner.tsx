'use client'

import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Icons } from './ui/icons'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'

export default function GameContainer() {
  const router = useRouter()
  return <Card className='max-w-lg  mx-auto my-auto flex flex-col justify-center items-center'>test</Card>
}
