import { NextRequest, NextResponse } from 'next/server'

export function handleCors(req: NextRequest, res: NextResponse) {
  // Set the CORS headers
  res.headers.set('Access-Control-Allow-Origin', 'https://f9y5qs.csb.app/')
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')

  // If the request is an OPTIONS request, end it here
  if (req.method === 'OPTIONS') {
    return NextResponse.json(null, { status: 204 })
  }
}
