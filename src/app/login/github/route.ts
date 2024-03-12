import { generateState } from 'arctic'
import { github } from '@/lib/auth'
import { cookies } from 'next/headers'

import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse> {
  const state = generateState()
  const url = await github.createAuthorizationURL(state)
  if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
    // Environment variables are accessible
    console.log('GitHub client ID and secret are accessible.')
  } else {
    // Environment variables are not accessible
    console.error('GitHub client ID and/or secret are not accessible.')
  }

  cookies().set('github_oauth_state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax',
  })

  return NextResponse.redirect(/*url*/ 'https://github.com')
  //return Response.json(/*url*/ {})
}
