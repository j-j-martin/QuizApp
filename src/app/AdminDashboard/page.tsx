'use client'

import React, { useState, useEffect, ChangeEventHandler } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PrismaClient } from '@prisma/client'
import Questionrequest from '@/types/QuestionRequest'
import Navbar from '@/components/navbar'
import AllQuestionsAccordion from '@/components/allQuestionsAccordion'
import QuestionWithAnswers from '@/types/QuestionsWithAnswers'

const prisma = new PrismaClient()
async function GetQuestions() {
  const allQuestions = await prisma.question.findMany()
}

let questions: QuestionWithAnswers[] = []

async function handleSaveQuestion(Question: string, Answer1: string, Answer2: string, Answer3: string, Answer4: string) {
  const questionRequest: Questionrequest = { content: Question, answers: [Answer1, Answer2, Answer3, Answer4] }
  await fetch('/api/Questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(questionRequest),
  })
}

const AdminDashboard = () => {
  const [Question, setQuestion] = useState('')
  const [Answer1, setAnswer1] = useState('')
  const [Answer2, setAnswer2] = useState('')
  const [Answer3, setAnswer3] = useState('')
  const [Answer4, setAnswer4] = useState('')

  function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>): void {
    setValue(event.target.value)
  }

  const [currentQuestion, setCurrentQuestion] = useState<QuestionWithAnswers>()

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetch('/api/Questions', {
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
    <div>
      <Navbar />
      <div className='flex flex-col container'>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='mt-8 mr-52 ml-52 min-w-32' variant='outline'>
              Add Question
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Add Question</DialogTitle>
              <DialogDescription>Add a question and 4 Possible Answers</DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Question:
                </Label>
                <Input id='name' className='col-span-3' value={Question} onChange={event => HandleInputChange(event, setQuestion)} />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label className='text-right'>Answer 1:</Label>
                <Input id='answer1' className='col-span-3' value={Answer1} onChange={event => HandleInputChange(event, setAnswer1)} />
                <Label className='text-right'>Answer 2:</Label>
                <Input id='answer2' className='col-span-3' value={Answer2} onChange={event => HandleInputChange(event, setAnswer2)} />
                <Label className='text-right'>Answer 3:</Label>
                <Input id='answer3' className='col-span-3' value={Answer3} onChange={event => HandleInputChange(event, setAnswer3)} />
                <Label className='text-right'>Answer 4:</Label>
                <Input id='answer4' className='col-span-3' value={Answer4} onChange={event => HandleInputChange(event, setAnswer4)} />
              </div>
            </div>
            <DialogFooter>
              <Button type='submit' onClick={() => handleSaveQuestion(Question, Answer1, Answer2, Answer3, Answer4)}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className='container'>
        <AllQuestionsAccordion question={'d'} answer2={'d'} answer1={'d'} answer3={'d'} answer4={'d'} />
      </div>
    </div>
  )
}

export default AdminDashboard
