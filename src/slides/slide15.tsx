import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.5",
  "title": "Section breaks",
  "kind": "sections",
  "part": 1,
  "points": [
    "A section break divides a document into areas with independently controlled layout.",
    "A Next Page section break starts a new section on the following page.",
    "A Continuous section break starts a new section on the same page.",
    "Use sections for a portrait cover followed by landscape pages or for mixed column layouts.",
    "Check Apply to and Link to Previous when changing section layout or header and footer content."
  ],
  "practice": {
    "task": "Keep a title and closing paragraph full width, but put the two body paragraphs between them into two columns.",
    "steps": [
      "Type a title, two body paragraphs and a closing paragraph.",
      "Place the cursor before the first body paragraph. Choose Layout > Breaks > Section Breaks > Continuous.",
      "Place the cursor after the second body paragraph and insert another Continuous section break.",
      "Click between the breaks. Choose Layout > Columns > More Columns > Two, Apply to This section, then OK.",
      "Check that the title and closing paragraph remain full width."
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

export function Slide15() { return <LessonSlide lesson={lesson} /> }
