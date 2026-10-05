import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.6",
  "title": "Find and Replace",
  "kind": "replace",
  "part": 1,
  "points": [
    "Find locates text; Replace substitutes specified text with new text.",
    "Replace All changes every match, while individual replacement lets you inspect each one.",
    "Match case distinguishes uppercase and lowercase text when necessary.",
    "Find whole words only helps prevent changing letters inside a longer word.",
    "Check the search options and inspect the result so unrelated text is not changed."
  ],
  "practice": {
    "task": "Replace school club with technology club one match at a time. Inspect each match and explain when Replace All would be appropriate.",
    "steps": [
      "Type two sentences containing school club and one unrelated sentence.",
      "Press Ctrl+H. Enter school club in Find what and technology club in Replace with.",
      "Check the search options. Click Find Next to inspect a match.",
      "Click Replace only when the change is appropriate, then repeat for the next match.",
      "Explain that Replace All is suitable only when every match should change."
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

export function Slide33() { return <LessonSlide lesson={lesson} /> }
