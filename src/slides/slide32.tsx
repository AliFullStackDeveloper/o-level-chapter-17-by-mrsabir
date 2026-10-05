import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.6",
  "title": "Find and Replace",
  "kind": "replace",
  "part": 0,
  "points": [
    "Find locates text; Replace substitutes specified text with new text.",
    "Replace All changes every match, while individual replacement lets you inspect each one.",
    "Match case distinguishes uppercase and lowercase text when necessary.",
    "Find whole words only helps prevent changing letters inside a longer word.",
    "Check the search options and inspect the result so unrelated text is not changed."
  ],
  "practice": {
    "task": "In “ABC supplies equipment. ABC supports school. ABCD is a code.” replace only the whole-word uppercase ABC with XYZ.",
    "steps": [
      "Type ABC supplies equipment. ABC supports school. ABCD is a code.",
      "Press Ctrl+H. Enter ABC in Find what and XYZ in Replace with.",
      "Click More and tick Match case and Find whole words only. Ensure no unwanted formatting filters are set.",
      "Click Replace All. Word should report two replacements.",
      "Read the text: both ABC words become XYZ and ABCD stays unchanged."
    ]
  },
  "check": {
    "question": "What prevents ABC inside ABCD being replaced?",
    "choices": [
      "Find whole words only",
      "Larger font",
      "Centre alignment"
    ],
    "answer": 0,
    "explanation": "Whole-word matching excludes text inside longer words."
  }
}

export function Slide32() { return <LessonSlide lesson={lesson} /> }
