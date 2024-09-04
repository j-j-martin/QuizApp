import PollAnswer from '@/types/PollAnswer'
import PollQuestionWithAnswers from '@/types/PollQuestionWithAnswers'
import { NextRequest, NextResponse } from 'next/server'

const comments = [
  'I’m extremely pleased with this outcome. It’s exactly what I was hoping for.',
  'There’s potential here, but it could definitely be better.',
  'This is an acceptable result, though not particularly remarkable.',
  'It’s fine, but with a little more effort, it could be much improved.',
  'This turned out excellently! I’m very happy with it.',
  'I’m not entirely satisfied with this. It could have been better.',
  'I’m very happy with how this turned out. It met my expectations.',
  'I have no strong feelings either way. It’s just okay.',
  'I’m somewhat disappointed. This didn’t quite meet my expectations.',
  'This is satisfactory. It meets the basic requirements I had in mind.',
]

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomComment(): string {
  return comments[getRandomInt(0, comments.length - 1)]
}

function generateRandomAnswer(): PollAnswer {
  return {
    rating: getRandomInt(1, 7), // Rating zwischen 1 und 7
    comment: getRandomComment(),
  }
}

function generateSurveyResults(questions: string[]): PollQuestionWithAnswers[] {
  return questions.map(question => {
    const numberOfAnswers = getRandomInt(5, 15)
    const answers = Array.from({ length: numberOfAnswers }, generateRandomAnswer)

    return {
      Question: question,
      Answers: answers,
    }
  })
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const request: string[] = await req.json()
    const pollResults = generateSurveyResults(request)
    return NextResponse.json(pollResults)
  } catch (error) {
    return new Response('Invalid request body', { status: 422 })
  }
}
