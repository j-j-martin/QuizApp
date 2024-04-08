import Questionrequest from '@/types/QuestionRequest'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'
import { Prisma, PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest, res: NextResponse) {
  const questionrequests: Questionrequest[] = await req.json()
  for (const questionrequest of questionrequests) {
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
    } catch (error) {
      return new Response('Invalid request body', { status: 422 })
    }
  }
  return NextResponse.json(res)
}
