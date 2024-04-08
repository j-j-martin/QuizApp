'use client'

import QuestionCard from '@/components/QuestionCard'
import ScoreGrid from '@/components/ScoreGrid'
import { ModeToggle } from '@/components/mode-toggle'
import Navbar from '@/components/navbar'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'
import React, { useEffect, useState } from 'react'

let questions: QuestionWithAnswers[] = []

const GamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionWithAnswers>()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sortedAnswers, setSortedAnswers] = useState<string[]>([])
  const [rightAnswerCount, setRightAnswerCount] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswerButtonClicked, setIsAnswerButtonClicked] = useState(false)
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false)
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

  const hasAllAnswers = sortedAnswers.length === 4

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetch('/api/questions/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      questions = await data.json()
      setCurrentQuestion(questions[0])
      setSortedAnswers(sortAnswers(questions[0].answers))
    }

    fetchQuestions().catch(console.error)
  }, [])

  useEffect(() => {
    if (isAnswerButtonClicked) {
      setCurrentAnswerIndex(currentAnswerIndex + 1)
    }
  }, [isAnswerButtonClicked])

  useEffect(() => {
    if (isNextButtonClicked) {
      setCurrentQuestion(questions[currentQuestionIndex + 1])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSortedAnswers(sortAnswers(questions[currentQuestionIndex + 1].answers))
      setIsNextButtonClicked(false)
      setIsAnswerButtonClicked(false)
    }
  }, [isNextButtonClicked])

  function sortAnswers(
    answers: {
      id: string
      content: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
      questionId: string
    }[],
  ): string[] {
    const correctAnswer = answers.find(answer => answer.isCorrect)
    if (!correctAnswer) {
      throw new Error(`Frage "${currentQuestion?.content}" hat keine richtig Antwort.`)
    }
    const otherAnswers = answers.filter(answer => !answer.isCorrect)
    return [correctAnswer, ...otherAnswers].map(x => x.content)
  }

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-3 grid-rows-1 gap-4'>
        <div className='col-span-1 w-full'>
          <ScoreGrid currentAnswerIndex={currentAnswerIndex} isCurrentAnswerCorrect={isCorrect} />
        </div>
        <div className='col-span-1'>
          {currentQuestion && hasAllAnswers ? (
            <QuestionCard
              question={currentQuestion.content}
              correctAnswer={sortedAnswers[0]}
              answer2={sortedAnswers[1]}
              answer3={sortedAnswers[2]}
              answer4={sortedAnswers[3]}
              setIsCorrect={setIsCorrect}
              isAnswerButtonClicked={isAnswerButtonClicked}
              setIsAnswerButtonClicked={setIsAnswerButtonClicked}
              setIsNextButtonClicked={setIsNextButtonClicked}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default GamePage
