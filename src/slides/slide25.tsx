import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.3",
  "title": "Paragraph indents",
  "kind": "indents",
  "part": 1,
  "points": [
    "An indent moves paragraph text inward from the normal margin.",
    "A first line indent moves only the opening line of the paragraph.",
    "A whole paragraph indent moves every line of the paragraph inward.",
    "A hanging indent keeps the first line further left than the following lines.",
    "Use the ruler or Paragraph dialog to set accurate values, rather than repeated spaces."
  ],
  "practice": {
    "task": "Indent a quotation 2 cm from the left, then apply a 1 cm hanging indent to another paragraph. Compare the layouts.",
    "steps": [
      "Select a quotation paragraph. In the Paragraph dialog set Left to 2 cm and Special to None. Click OK.",
      "Select a different paragraph. Set Left to 0 cm, Special to Hanging and By to 1 cm. Click OK.",
      "Turn on View > Ruler. Compare the indent markers for both paragraphs.",
      "The quotation shifts all lines; the hanging paragraph shifts the lines after the first."
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

export function Slide25() { return <LessonSlide lesson={lesson} /> }
