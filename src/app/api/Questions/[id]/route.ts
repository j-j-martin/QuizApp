import { Prisma, PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, {params}: {params: { id: string
}}) {
  try {
    const questions = await prisma.question.findUnique({
      where: {
        id: params.id
      }
    })
    return NextResponse.json(questions)
  } catch (error) {
    return new Response('Invalid request body', { status: 422 })
  }
}