import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "Supporting concept",
  "title": "Headers footers and fields",
  "kind": "fields",
  "part": 0,
  "points": [
    "A header appears in the top area of a page; a footer appears in the bottom area.",
    "They can contain names, dates, times, filenames and automatic page numbers.",
    "Fields display information automatically; some fields must be updated after saving or editing.",
    "Changing page width may require adjusting centre and right tab stops in these areas.",
    "Use suitable edge distances and check long filenames or paths for unwanted wrapping."
  ],
  "practice": {
    "task": "Put your name at the left of a footer and an automatic page number at the right. Add a second page and check the number.",
    "steps": [
      "Choose Insert > Footer > Edit Footer and type your name.",
      "Set a right-aligned tab at the right text margin using the ruler or the Paragraph > Tabs dialog. Press Tab to reach it.",
      "Choose Insert > Page Number > Current Position and select a plain automatic number.",
      "Close Header and Footer. Insert a page break in the body with Ctrl+Enter.",
      "Check the second page footer: its automatic page number should show 2."
    ]
  },
  "check": {
    "question": "Why use a page-number field?",
    "choices": [
      "It updates page numbers automatically",
      "It makes all pages number 1",
      "It removes the footer"
    ],
    "answer": 0,
    "explanation": "Automatic page-number fields show the current page number."
  }
}

export function Slide08() { return <LessonSlide lesson={lesson} /> }
