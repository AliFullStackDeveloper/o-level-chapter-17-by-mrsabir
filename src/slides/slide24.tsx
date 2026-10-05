import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.3",
  "title": "Paragraph indents",
  "kind": "indents",
  "part": 0,
  "points": [
    "An indent moves paragraph text inward from the normal margin.",
    "A first line indent moves only the opening line of the paragraph.",
    "A whole paragraph indent moves every line of the paragraph inward.",
    "A hanging indent keeps the first line further left than the following lines.",
    "Use the ruler or Paragraph dialog to set accurate values, rather than repeated spaces."
  ],
  "practice": {
    "task": "Apply a 1 cm first-line indent to a report paragraph. Only the opening line should move.",
    "steps": [
      "Select a report paragraph. Open Home > Paragraph dialog.",
      "Under Indentation set Left to 0 cm and Special to First line.",
      "Set By to 1 cm and click OK.",
      "Check the ruler and paragraph: only the first line should move inward."
    ]
  },
  "check": {
    "question": "Which indent moves lines after the first?",
    "choices": [
      "First-line",
      "Hanging",
      "Right alignment"
    ],
    "answer": 1,
    "explanation": "A hanging indent leaves the first line further left."
  }
}

export function Slide24() { return <LessonSlide lesson={lesson} /> }
