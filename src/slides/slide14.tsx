import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Section breaks",
  "kind": "sections",
  "part": 0,
  "points": [
    "A section break divides a document into areas with independently controlled layout.",
    "A Next Page section break starts a new section on the following page.",
    "A Continuous section break starts a new section on the same page.",
    "Use sections for a portrait cover followed by landscape pages or for mixed column layouts.",
    "Check Apply to and Link to Previous when changing section layout or header and footer content."
  ],
  "practice": {
    "task": "Keep a cover portrait and make the following section landscape. Apply the orientation only to that section.",
    "steps": [
      "Type a cover title and your name, then place the cursor after the name.",
      "Choose Layout > Breaks > Section Breaks > Next Page.",
      "Click in the new section and choose Layout > Orientation > Landscape.",
      "If Word changes the whole document, open Page Setup and set Apply to to This section.",
      "Inspect both pages: cover portrait, following section landscape."
    ]
  },
  "check": {
    "question": "Which section break can start on the same page?",
    "choices": [
      "Next Page",
      "Continuous",
      "Page Break"
    ],
    "answer": 1,
    "explanation": "Continuous starts a new section without forcing a new page."
  }
}

export function Slide14() { return <LessonSlide lesson={lesson} /> }
