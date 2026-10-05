import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.3",
  "title": "Gutter margins",
  "kind": "gutter",
  "part": 0,
  "points": [
    "A gutter is extra space reserved for binding a book or booklet.",
    "It prevents text from being hidden where pages are glued, stapled or fastened.",
    "The gutter can be placed at the left or top, depending on the binding edge.",
    "For top-edge binding, set the gutter position to Top and enter the required width.",
    "Check that header text does not fall inside the binding area."
  ],
  "practice": {
    "task": "Reserve 1.5 cm for a left-bound booklet. Where should the extra binding space go?",
    "steps": [
      "Open Layout > Margins > Custom Margins.",
      "Set Multiple pages to Normal for this practice. Enter Gutter 1.5 cm.",
      "Set Gutter position to Left; set Apply to to Whole document and click OK.",
      "Check the preview: the left binding space is wider. Save the booklet."
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

export function Slide06() { return <LessonSlide lesson={lesson} /> }
