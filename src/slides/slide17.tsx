import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Column breaks and pagination",
  "kind": "pagination",
  "part": 1,
  "points": [
    "A column break forces text to the top of the next available column.",
    "The next column may be on the same page or on the following page.",
    "A widow is a paragraph ending left alone at the top of a page or column.",
    "An orphan is a paragraph opening left alone at the bottom; also avoid isolated headings.",
    "Use widow orphan control, Keep with next and suitable breaks to improve the layout."
  ],
  "practice": {
    "task": "A heading is stranded at the bottom of a page. Keep it with the following paragraph and check widow/orphan control.",
    "steps": [
      "Create enough text to place a heading near the bottom of a page with its paragraph on the next page.",
      "Select the heading only. Open Home > Paragraph dialog launcher.",
      "Choose Line and Page Breaks and tick Keep with next. Click OK.",
      "Check that the heading moves with the first line of the following paragraph. Also inspect Widow Orphan control for body text."
    ]
  },
  "check": {
    "question": "What keeps a heading with its following paragraph?",
    "choices": [
      "Keep with next",
      "Replace All",
      "A decimal tab"
    ],
    "answer": 0,
    "explanation": "Keep with next prevents a heading from being stranded."
  }
}

export function Slide17() { return <LessonSlide lesson={lesson} /> }
