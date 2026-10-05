import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.2",
  "title": "Line and paragraph spacing",
  "kind": "spacing",
  "part": 0,
  "points": [
    "Line spacing controls the distance between lines within a paragraph.",
    "Common options include single, 1.5, double and a chosen multiple.",
    "Paragraph spacing controls the space before and after a paragraph, usually in points.",
    "A heading is also a paragraph, so it can have its own before and after spacing.",
    "Use consistent spacing and check it again after moving, inserting or deleting text."
  ],
  "practice": {
    "task": "Compare single and double spacing on the same paragraph without adding blank paragraphs.",
    "steps": [
      "Select a paragraph with several lines.",
      "Choose Home > Line and Paragraph Spacing > 1.0. Observe the line gaps.",
      "With the same paragraph selected, choose 2.0.",
      "Observe the larger line gaps. Do not press Enter to create spacing."
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

export function Slide22() { return <LessonSlide lesson={lesson} /> }
