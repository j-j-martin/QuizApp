'use client'

import QuestionCard from '@/components/QuestionCard'
import Navbar from '@/components/navbar'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'
import React, { useEffect, useState } from 'react'

let questions: QuestionWithAnswers[] = []

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionWithAnswers>()

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetch('/api/Questions/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      questions = await data.json()
      setCurrentQuestion(questions[0])
    }

    fetchQuestions().catch(console.error)
  }, [])

  return (
    <>
      <Navbar />
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion.content}
          answer1={currentQuestion.answers[0].content}
          answer2={currentQuestion.answers[1].content}
          answer3={currentQuestion.answers[2].content}
          answer4={currentQuestion.answers[3].content}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default Game
