import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Column breaks and pagination",
  "kind": "pagination",
  "part": 0,
  "points": [
    "A column break forces text to the top of the next available column.",
    "The next column may be on the same page or on the following page.",
    "A widow is a paragraph ending left alone at the top of a page or column.",
    "An orphan is a paragraph opening left alone at the bottom; also avoid isolated headings.",
    "Use widow orphan control, Keep with next and suitable breaks to improve the layout."
  ],
  "practice": {
    "task": "Move School News to the top of the next column in a two-column newsletter.",
    "steps": [
      "Create two body paragraphs and a School News heading. Set this section to two columns through Layout > Columns.",
      "Place the cursor immediately before School News.",
      "Choose Layout > Breaks > Column.",
      "Check that the heading moves to the next column. Show Hide should display a Column Break marker."
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

export function Slide16() { return <LessonSlide lesson={lesson} /> }
