import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.2",
  "title": "Line and paragraph spacing",
  "kind": "spacing",
  "part": 1,
  "points": [
    "Line spacing controls the distance between lines within a paragraph.",
    "Common options include single, 1.5, double and a chosen multiple.",
    "Paragraph spacing controls the space before and after a paragraph, usually in points.",
    "A heading is also a paragraph, so it can have its own before and after spacing.",
    "Use consistent spacing and check it again after moving, inserting or deleting text."
  ],
  "practice": {
    "task": "Give a heading 12 pt before and 6 pt after. Set the body to 1.5 line spacing and 6 pt after. Which gaps does each setting control?",
    "steps": [
      "Select the heading and open Home > Paragraph dialog.",
      "Under Spacing set Before to 12 pt and After to 6 pt. Click OK.",
      "Select its body paragraph and reopen the Paragraph dialog. Set Line spacing to 1.5 lines and After to 6 pt.",
      "Click OK and compare the line gaps with the gaps between paragraphs."
    ]
  },
  "check": {
    "question": "What does 6 pt After control?",
    "choices": [
      "The gap after the paragraph",
      "The paper width",
      "The distance between every line"
    ],
    "answer": 0,
    "explanation": "Paragraph spacing after controls the gap below a paragraph."
  }
}

export function Slide23() { return <LessonSlide lesson={lesson} /> }
