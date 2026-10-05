import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.2",
  "title": "Page margins",
  "kind": "margins",
  "part": 1,
  "points": [
    "Margins are the spaces between the page edges and the main body text.",
    "Top, bottom, left and right margins can be set independently.",
    "Wider margins reduce the space available for text and can increase the page count.",
    "Use the exact measurements requested, and convert units carefully: 10 mm equals 1 cm.",
    "After changing margins, check that the header and footer still align correctly."
  ],
  "practice": {
    "task": "Set top and bottom margins to 3 cm, and left and right to 2.5 cm. How does this change the usable text area?",
    "steps": [
      "Choose Layout > Margins > Custom Margins.",
      "Set Top and Bottom to 3 cm; set Left and Right to 2.5 cm.",
      "Set Apply to to Whole document and click OK.",
      "Compare the preview with the previous 2 cm margin version. The usable text area is smaller."
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

export function Slide05() { return <LessonSlide lesson={lesson} /> }
