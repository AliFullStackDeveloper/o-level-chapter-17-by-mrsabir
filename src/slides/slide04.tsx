import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.2",
  "title": "Page margins",
  "kind": "margins",
  "part": 0,
  "points": [
    "Margins are the spaces between the page edges and the main body text.",
    "Top, bottom, left and right margins can be set independently.",
    "Wider margins reduce the space available for text and can increase the page count.",
    "Use the exact measurements requested, and convert units carefully: 10 mm equals 1 cm.",
    "After changing margins, check that the header and footer still align correctly."
  ],
  "practice": {
    "task": "Set all four margins to 2 cm. Check that the main text stays within the margin boundaries.",
    "steps": [
      "Open a document and choose Layout > Margins > Custom Margins.",
      "Enter 2 cm in Top, Bottom, Left and Right. Leave Gutter at 0 cm.",
      "Set Apply to to Whole document and click OK.",
      "Check File > Print: the body text should remain inside the four margins."
    ]
  },
  "check": {
    "question": "How many centimetres are 20 mm?",
    "choices": [
      "0.2 cm",
      "2 cm",
      "20 cm"
    ],
    "answer": 1,
    "explanation": "10 mm = 1 cm, so 20 mm = 2 cm."
  }
}

export function Slide04() { return <LessonSlide lesson={lesson} /> }
