import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import styles from './QuestionCard.module.css'
import { Button } from './ui/button'
import Answer from '@/types/Answer'
import AnswerCard from './AnswerCard'

interface QuestionCardProps {
  question: string
  correctAnswer: string
  answer2: string
  answer3: string
  answer4: string
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>
  setIsNextButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  setIsAnswerButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  isAnswerButtonClicked: boolean
}

const ShuffleAnswers = (answers: string[]) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[answers[i], answers[j]] = [answers[j], answers[i]]
  }
  return answers
}

const QuestionCard = ({
  question,
  correctAnswer,
  answer2,
  answer3,
  answer4,
  isAnswerButtonClicked,
  setIsCorrect,
  setIsAnswerButtonClicked,
  setIsNextButtonClicked,
}: QuestionCardProps) => {
  const [clickedAnswer, setClickedAnswer] = useState(Answer.None)
  const [answerButtonText, setAnswerButtonText] = useState('Bestätigen')

  const shuffledAnswers = useMemo(() => ShuffleAnswers([correctAnswer, answer2, answer3, answer4]), [question])

  function handleClick(answer: Answer): void {
    setClickedAnswer(answer)
  }

  function handleAnswerButtonClick(): void {
    if (!isAnswerButtonClicked) {
      setIsCorrect(clickedAnswer === shuffledAnswers.findIndex(x => x === correctAnswer))
      setAnswerButtonText('Nächste Frage')
    } else {
      setIsNextButtonClicked(true)
      setAnswerButtonText('Bestätigen')
    }
    setIsAnswerButtonClicked(!isAnswerButtonClicked)
  }

  return (
    <>
      <Card className='z-10 relative max-w-lg max-h-lg mx-auto my-auto border-style-none'>
        <CardHeader>
          <CardTitle>{question}</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-2 gap-2'>
          {shuffledAnswers.map((answer, index) => (
            <AnswerCard
              key={index}
              answer={answer}
              index={index}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
              isAnswerButtonClicked={isAnswerButtonClicked}
              handleClick={handleClick}
            />
          ))}
        </CardContent>
        <CardFooter>
          <Button className='w-full' onClick={handleAnswerButtonClick}>
            {answerButtonText}
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default QuestionCard
