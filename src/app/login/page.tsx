import Loginmask from '@/components/login-mask'
import Navbar from '@/components/navbar'
import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  // const { user } = await validateRequest()
  // if (user) {
  //   return redirect('/')
  // }
  return (
    <div className='antialiased'>
      <Navbar />
      <Loginmask />
    </div>
  )
}
