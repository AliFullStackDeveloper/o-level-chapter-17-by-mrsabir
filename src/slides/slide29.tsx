import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.4",
  "title": "Text enhancement",
  "kind": "enhancement",
  "part": 1,
  "points": [
    "Bold, italic, underline, highlighting and colour can make selected text stand out.",
    "Font size and capitalisation can also give emphasis to a word or phrase.",
    "Superscript makes a character smaller and raises it above the baseline, as in x squared.",
    "Subscript makes a character smaller and lowers it below the baseline, as in H2O.",
    "Apply enhancements only to the required text and keep the document readable and consistent."
  ],
  "practice": {
    "task": "Type H2O and x2. Format only the digits so the chemical formula and the power have the correct positions.",
    "steps": [
      "Type H2O and x2. Select only the 2 in H2O.",
      "Choose Home > Font > Subscript, the x2 icon with a lowered 2.",
      "Select only the 2 in x2 and choose Superscript, the icon with a raised 2.",
      "Check that the first digit is below the baseline and the second is above it."
    ]
  },
  "check": {
    "question": "Which formatting is used for the 2 in H₂O?",
    "choices": [
      "Superscript",
      "Subscript",
      "Bold"
    ],
    "answer": 1,
    "explanation": "Subscript lowers a small character below the baseline."
  }
}

export function Slide29() { return <LessonSlide lesson={lesson} /> }
