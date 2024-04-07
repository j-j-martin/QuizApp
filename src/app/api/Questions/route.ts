import Questionrequest from '@/types/QuestionRequest'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest, res: NextResponse) {
  const questionrequest: Questionrequest = await req.json()
  try {
    await prisma.question.create({
      data: {
        content: questionrequest.content,
        answers: {
          createMany: {
            data: [
              { content: questionrequest.answers[0], isCorrect: true },
              { content: questionrequest.answers[1] },
              { content: questionrequest.answers[2] },
              { content: questionrequest.answers[3] },
            ],
          },
        },
      },
    })
    return NextResponse.json(res)
  } catch (error) {
    return new Response('Invalid request body', { status: 422 })
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const questions: QuestionWithAnswers[] = await prisma.question.findMany({
      include: {
        answers: true,
      },
    })
    return NextResponse.json(questions)
  } catch (error) {
    return new Response('Invalid request body', { status: 422 })
  }
}
