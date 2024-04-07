import Questionrequest from '@/types/QuestionRequest'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'
import { Prisma, PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()
const QUESTIONS_PER_GAME = 10

function getRandomNumbers(n: number, count: number) {
  const numbers: number[] = []
  for (var i = 1; i <= n; i++) {
    numbers.push(i)
  }
  // Shuffle the array using Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }
  // Return the first x numbers from the shuffled array
  return numbers.slice(0, count)
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const questionsCount = await prisma.question.count()
    const questionsThisGame = Math.min(questionsCount, QUESTIONS_PER_GAME)
    const randomNumbers = getRandomNumbers(questionsCount, questionsThisGame)
    let questions: QuestionWithAnswers[] = []

    for (let i = 0; i < questionsCount; i++) {
      const question = await prisma.question.findMany({
        skip: randomNumbers[i] - 1,
        take: 1,
        include: {
          answers: true,
        },
      })
      if (question) {
        questions.push(question[0])
      } else {
        // Fehlerbehandlung
      }
    }
    return NextResponse.json(questions)
  } catch (error) {
    return new Response('Invalid request body', { status: 422 })
  }
}
