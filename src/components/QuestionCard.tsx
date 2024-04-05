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
      <Card>
        <CardHeader>
          <CardTitle>{question}</CardTitle>
        </CardHeader>
        <CardContent>
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
