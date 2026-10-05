import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.4",
  "title": "Text enhancement",
  "kind": "enhancement",
  "part": 0,
  "points": [
    "Bold, italic, underline, highlighting and colour can make selected text stand out.",
    "Font size and capitalisation can also give emphasis to a word or phrase.",
    "Superscript makes a character smaller and raises it above the baseline, as in x squared.",
    "Subscript makes a character smaller and lowers it below the baseline, as in H2O.",
    "Apply enhancements only to the required text and keep the document readable and consistent."
  ],
  "practice": {
    "task": "Make a title bold and dark blue, a quotation italic, an important phrase underlined and a reminder highlighted.",
    "steps": [
      "Select a title. Choose Home > Bold and Font Colour > a dark blue.",
      "Select a quotation and click Italic. Select a separate important phrase and click Underline.",
      "Select a reminder and choose Text Highlight Colour.",
      "Compare the results and check that only the intended text was enhanced."
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

export function Slide28() { return <LessonSlide lesson={lesson} /> }
