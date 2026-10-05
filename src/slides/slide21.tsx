import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.1",
  "title": "Text alignment",
  "kind": "alignment",
  "part": 1,
  "points": [
    "Left alignment gives a straight left edge and a ragged right edge.",
    "Centre alignment places each line around the centre of the available width.",
    "Right alignment gives a straight right edge and a ragged left edge.",
    "Justified alignment aligns text to both margins by adjusting spacing between words.",
    "Choose the requested alignment; titles, body text and different paragraphs may use different settings."
  ],
  "practice": {
    "task": "Justify a report paragraph and right align the author name beneath it. Compare the straight edges.",
    "steps": [
      "Type a report paragraph long enough to wrap over several lines. Type the author name beneath it.",
      "Select the report paragraph and choose Home > Justify or press Ctrl+J.",
      "Select the author paragraph and choose Align Right or press Ctrl+R.",
      "Check that the report aligns at both margins and the author name ends at the right margin."
    ]
  },
  "check": {
    "question": "Which alignment straightens both text edges?",
    "choices": [
      "Centre",
      "Right",
      "Justified"
    ],
    "answer": 2,
    "explanation": "Justification adjusts word spacing to align both margins, except the last line."
  }
}

export function Slide21() { return <LessonSlide lesson={lesson} /> }
