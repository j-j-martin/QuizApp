import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

interface QuestionAccordeonProps {
  question: string
  answer2: string
  answer1: string
  answer3: string
  answer4: string
}

const allQuestionsAccordion = ({ question, answer1, answer2, answer3, answer4 }: QuestionAccordeonProps) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer1}</AccordionContent>
        <AccordionContent>{answer2}</AccordionContent>
        <AccordionContent>{answer3}</AccordionContent>
        <AccordionContent>{answer4}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default allQuestionsAccordion
