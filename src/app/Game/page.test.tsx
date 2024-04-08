import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import GamePage from '@/app/game/page'
import fetchMock from 'jest-fetch-mock'
import '@testing-library/jest-dom'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'

beforeEach(() => {
  fetchMock.resetMocks()
})

it('renders the Navbar and QuestionCard with fetched data', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        id: '0',
        content: 'Test question',
        createdAt: new Date(),
        updatedAt: new Date(),
        answers: [
          {
            id: '0',
            content: 'Answer 1',
            isCorrect: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            questionId: '0',
          },
          {
            id: '1',
            content: 'Answer 2',
            isCorrect: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            questionId: '0',
          },
          {
            id: '2',
            content: 'Answer 3',
            isCorrect: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            questionId: '0',
          },
          {
            id: '3',
            content: 'Answer 4',
            isCorrect: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            questionId: '0',
          },
        ],
      },
    ] as QuestionWithAnswers[]),
  )

  render(<GamePage />)

  // Wait for the fetch operation to complete and the component to update
  await waitFor(() => {
    // Check if the QuestionCard is rendered with the correct props
    expect(screen.getByText('Test question')).toBeInTheDocument()
  })

  // Check if the QuestionCard is rendered with the correct props
  expect(screen.getByText('Test question')).toBeInTheDocument()
  expect(screen.getByText('Answer 1')).toBeInTheDocument()
  expect(screen.getByText('Answer 2')).toBeInTheDocument()
  expect(screen.getByText('Answer 3')).toBeInTheDocument()
  expect(screen.getByText('Answer 4')).toBeInTheDocument()
})
