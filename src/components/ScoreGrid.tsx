import { useEffect, useState } from 'react'
import styles from './ScoreGrid.module.css'

interface ScoreGridProps {
  isCurrentAnswerCorrect: boolean
  currentAnswerIndex: number
}

const ScoreGrid = ({ isCurrentAnswerCorrect, currentAnswerIndex }: ScoreGridProps) => {
  const [areAnswersCorrect, setAreAnswersCorrect] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  useEffect(() => {
    if (currentAnswerIndex != -1) {
      let newAreAnswersCorrect = [...areAnswersCorrect]
      newAreAnswersCorrect[currentAnswerIndex] = isCurrentAnswerCorrect
      setAreAnswersCorrect(newAreAnswersCorrect)
      //window.alert(`currentanswerIndex: ${currentAnswerIndex}, isCurrentAnswerCorrect: ${isCurrentAnswerCorrect}`)
    }
  }, [currentAnswerIndex])

  return (
    <div className='grid grid-cols-10 gap-0 ml-4 w'>
      {areAnswersCorrect.map((isAnswerCorrect, index) => (
        <div
          key={index}
          className={`${currentAnswerIndex >= index ? (isAnswerCorrect ? styles.correctAnswer : styles.wrongAnswer) : ''} w-6 h-6 rounded`}
        ></div>
      ))}
    </div>
  )
}

export default ScoreGrid
