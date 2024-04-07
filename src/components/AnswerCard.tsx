import Answer from '@/types/Answer'
import styles from './AnswerCard.module.css'
import { Card, CardContent } from './ui/card'

interface AnswerCardProps {
  answer: string
  index: number
  correctAnswer: string
  clickedAnswer: Answer
  isAnswerButtonClicked: boolean
  handleClick: (answer: Answer) => void
}

const AnswerCard = ({
  answer,
  index,
  correctAnswer,
  clickedAnswer,
  isAnswerButtonClicked,
  handleClick,
}: AnswerCardProps) => {
  const isCorrect = answer === correctAnswer && isAnswerButtonClicked
  const isWrong = clickedAnswer === index && answer !== correctAnswer && isAnswerButtonClicked
  const isSelected = clickedAnswer === index

  const cardClasses = [
    styles.card,
    isSelected ? styles.clicked : '',
    isCorrect ? styles.correctAnswer : '',
    isWrong ? styles.wrongAnswer : '',
  ].join(' ')

  return (
    <Card onClick={() => handleClick(index)} className={cardClasses}>
      <CardContent className='pt-5'>{answer}</CardContent>
    </Card>
  )
}

export default AnswerCard
