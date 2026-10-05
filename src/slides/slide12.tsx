import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Page breaks",
  "kind": "pagebreak",
  "part": 0,
  "points": [
    "A page break forces the following text to start on a new page.",
    "It is useful before a new topic or before content that should stay together.",
    "It does not by itself create an area with different orientation or margins.",
    "Insert it at the start of the text that must move, then inspect the result.",
    "Remove an unwanted page break to allow the text to flow normally again."
  ],
  "practice": {
    "task": "Make the heading Science Notes begin on a new page without inserting repeated blank paragraphs.",
    "steps": [
      "Type two short topics, with Science Notes as the second heading.",
      "Place the cursor before Science Notes.",
      "Press Ctrl+Enter to insert a page break.",
      "Inspect File > Print. Science Notes should begin at the top of the next page."
    ]
  },
  "check": {
    "question": "What does Ctrl+Enter insert in Word?",
    "choices": [
      "A page break",
      "A line of spaces",
      "A bookmark"
    ],
    "answer": 0,
    "explanation": "Ctrl+Enter starts the following content on a new page."
  }
}

export function Slide12() { return <LessonSlide lesson={lesson} /> }
