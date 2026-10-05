import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Page breaks",
  "kind": "pagebreak",
  "part": 1,
  "points": [
    "A page break forces the following text to start on a new page.",
    "It is useful before a new topic or before content that should stay together.",
    "It does not by itself create an area with different orientation or margins.",
    "Insert it at the start of the text that must move, then inspect the result.",
    "Remove an unwanted page break to allow the text to flow normally again."
  ],
  "practice": {
    "task": "Make an equipment table begin on a new page. Then remove the break and observe how the table flows back.",
    "steps": [
      "Create a small equipment table using Insert > Table. Place it after a paragraph.",
      "Click before the table and insert a page break. If necessary, select the start of the first cell and press Ctrl+Enter.",
      "Turn on Home > Show Hide and inspect the Page Break marker before the table.",
      "Select only the break marker and press Delete. Check that the table flows back according to the available space."
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

export function Slide13() { return <LessonSlide lesson={lesson} /> }
