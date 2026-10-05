import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.3",
  "title": "Gutter margins",
  "kind": "gutter",
  "part": 1,
  "points": [
    "A gutter is extra space reserved for binding a book or booklet.",
    "It prevents text from being hidden where pages are glued, stapled or fastened.",
    "The gutter can be placed at the left or top, depending on the binding edge.",
    "For top-edge binding, set the gutter position to Top and enter the required width.",
    "Check that header text does not fall inside the binding area."
  ],
  "practice": {
    "task": "Reserve a 2 cm gutter for a top-bound booklet. Check that the header does not enter the binding area.",
    "steps": [
      "Open Layout > Margins > Custom Margins.",
      "Set Multiple pages to Normal. Enter Gutter 2 cm and choose Gutter position Top. Click OK.",
      "Double-click the header. Inspect Header from Top in the Header and Footer tab.",
      "If the header overlaps the binding area, increase its distance from the top and recheck Print Preview. Save."
    ]
  },
  "check": {
    "question": "What is a gutter for?",
    "choices": [
      "Binding space",
      "Line spacing",
      "A page number"
    ],
    "answer": 0,
    "explanation": "A gutter adds space so binding does not hide the text."
  }
}

export function Slide07() { return <LessonSlide lesson={lesson} /> }
