'use client'

import React, { useState, useEffect, ChangeEventHandler } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PrismaClient } from '@prisma/client'
import Questionrequest from '@/types/QuestionRequest'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()
async function GetQuestions() {
  const allQuestions = await prisma.question.findMany()
}

const AdminDashboard = () => {
  // For AP 2 App, delete later
  useEffect(() => {
    redirect('/')
  }, [])

  const [Question, setQuestion] = useState('')
  const [Answer1, setAnswer1] = useState('')
  const [Answer2, setAnswer2] = useState('')
  const [Answer3, setAnswer3] = useState('')
  const [Answer4, setAnswer4] = useState('')

  async function handleSaveQuestion() {
    const questionRequest: Questionrequest = { content: Question, answers: [Answer1, Answer2, Answer3, Answer4] }
    setQuestion('')
    setAnswer1('')
    setAnswer2('')
    setAnswer3('')
    setAnswer4('')

    await fetch('/api/Questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(questionRequest),
    })
  }

  function HandleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ): void {
    setValue(event.target.value)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Add Question</Button>
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
              <Input
                id='name'
                className='col-span-3'
                value={Question}
                onChange={event => HandleInputChange(event, setQuestion)}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Answer 1:</Label>
              <Input
                id='answer1'
                className='col-span-3'
                value={Answer1}
                onChange={event => HandleInputChange(event, setAnswer1)}
              />
              <Label className='text-right'>Answer 2:</Label>
              <Input
                id='answer2'
                className='col-span-3'
                value={Answer2}
                onChange={event => HandleInputChange(event, setAnswer2)}
              />
              <Label className='text-right'>Answer 3:</Label>
              <Input
                id='answer3'
                className='col-span-3'
                value={Answer3}
                onChange={event => HandleInputChange(event, setAnswer3)}
              />
              <Label className='text-right'>Answer 4:</Label>
              <Input
                id='answer4'
                className='col-span-3'
                value={Answer4}
                onChange={event => HandleInputChange(event, setAnswer4)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit' onClick={handleSaveQuestion}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminDashboard
