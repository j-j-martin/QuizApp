import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface QuestionCardProps {
  question: string
  answer2: string
  answer1: string
  answer3: string
  answer4: string
}

const QuestionCard = ({ question, answer1, answer2, answer3, answer4 }: QuestionCardProps) => {
  return (
    <>
      <Card className='z-10 relative max-w-md max-h-lg mx-auto my-auto border-style-none'>
        <CardHeader>
          <CardTitle>{question}</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>{answer1}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{answer2}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{answer3}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{answer4}</CardTitle>
            </CardHeader>
          </Card>
        </CardContent>
      </Card>
    </>
  )
}

export default QuestionCard
