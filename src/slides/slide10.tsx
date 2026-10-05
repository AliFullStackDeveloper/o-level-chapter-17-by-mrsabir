import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.4",
  "title": "Purpose of document breaks",
  "kind": "breaks",
  "part": 0,
  "points": [
    "Breaks control where text continues and where a different layout begins.",
    "A page break starts a new page; a column break starts the next available column.",
    "A section break separates areas that can have different page or column settings.",
    "Breaks help keep content organised and can help resolve awkward pagination.",
    "Use Show Hide to see breaks, instead of pressing Enter repeatedly to move text."
  ],
  "practice": {
    "task": "Move Chapter Two onto a new page using a break. Show the formatting marks and compare the break with blank paragraphs.",
    "steps": [
      "Type Chapter One, some text, then Chapter Two on a new paragraph.",
      "Place the cursor immediately before Chapter Two. Choose Insert > Page Break or press Ctrl+Enter.",
      "Choose Home > Show Hide, the paragraph-mark button.",
      "Identify the Page Break marker. Compare it with ordinary paragraph marks produced by Enter.",
      "Delete unnecessary blank paragraphs and confirm that the page break still moves Chapter Two."
    ]
  },
  "check": {
    "question": "Which break permits a change of orientation?",
    "choices": [
      "Page break",
      "Column break",
      "Section break"
    ],
    "answer": 2,
    "explanation": "Sections can have different page layouts."
  }
}

export function Slide10() { return <LessonSlide lesson={lesson} /> }
