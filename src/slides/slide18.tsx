import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.6",
  "title": "Columns",
  "kind": "columns",
  "part": 0,
  "points": [
    "Columns arrange text vertically, like a newspaper or newsletter.",
    "You can set the number of columns, their widths and the gap between them.",
    "A vertical line can be added between columns when requested.",
    "Section breaks let a title or table remain full width while nearby body text uses columns.",
    "Apply the settings to the intended section and check that headings are not stranded."
  ],
  "practice": {
    "task": "Make the body section two equal columns, with a 1 cm gap and a dividing line. Keep the title full width.",
    "steps": [
      "Place Continuous section breaks before and after the body text, leaving the title outside that section.",
      "Click in the body section and choose Layout > Columns > More Columns.",
      "Choose Two, tick Equal column width and Line between, and set Spacing to 1 cm.",
      "Set Apply to to This section and click OK.",
      "Check the body has two equal columns and the title remains full width."
    ]
  },
  "check": {
    "question": "What is A4 usable width with 2 cm left/right margins?",
    "choices": [
      "17 cm",
      "19 cm",
      "21 cm"
    ],
    "answer": 0,
    "explanation": "A4 is 21 cm wide: 21 − 2 − 2 = 17 cm."
  }
}

export function Slide18() { return <LessonSlide lesson={lesson} /> }
