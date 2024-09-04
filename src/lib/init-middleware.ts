// lib/init-middleware.ts
import { NextRequest, NextResponse } from 'next/server'

type Middleware = (req: NextRequest, res: NextResponse, next: (err?: any) => void) => void

export default function initMiddleware(middleware: Middleware) {
  return (req: NextRequest, res: NextResponse): Promise<void> =>
    new Promise((resolve, reject) => {
      middleware(req, res, result => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
