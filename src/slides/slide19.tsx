import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.6",
  "title": "Columns",
  "kind": "columns",
  "part": 1,
  "points": [
    "Columns arrange text vertically, like a newspaper or newsletter.",
    "You can set the number of columns, their widths and the gap between them.",
    "A vertical line can be added between columns when requested.",
    "Section breaks let a title or table remain full width while nearby body text uses columns.",
    "Apply the settings to the intended section and check that headings are not stranded."
  ],
  "practice": {
    "task": "On A4 portrait with 2 cm margins, use three columns of 4 cm, 4 cm and 7 cm, with two 1 cm gaps. Check that they fit.",
    "steps": [
      "Set Layout > Size > A4, Orientation > Portrait and all margins to 2 cm.",
      "Choose Layout > Columns > More Columns; set Number of columns to 3.",
      "Clear Equal column width and set each of the two gaps to 1 cm.",
      "Set the three widths to 4 cm, 4 cm and 7 cm. Check the dialog values before clicking OK.",
      "The total is 4 + 4 + 7 + 1 + 1 = 17 cm, matching the usable width. Inspect the ruler and preview."
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

export function Slide19() { return <LessonSlide lesson={lesson} /> }
