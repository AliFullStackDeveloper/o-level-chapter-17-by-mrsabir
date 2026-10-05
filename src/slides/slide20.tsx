import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.1",
  "title": "Text alignment",
  "kind": "alignment",
  "part": 0,
  "points": [
    "Left alignment gives a straight left edge and a ragged right edge.",
    "Centre alignment places each line around the centre of the available width.",
    "Right alignment gives a straight right edge and a ragged left edge.",
    "Justified alignment aligns text to both margins by adjusting spacing between words.",
    "Choose the requested alignment; titles, body text and different paragraphs may use different settings."
  ],
  "practice": {
    "task": "Centre the title School Technology Club and left align the introductory paragraph.",
    "steps": [
      "Type School Technology Club as one paragraph and an introduction below it.",
      "Select only the title paragraph. Choose Home > Paragraph > Centre or press Ctrl+E.",
      "Select the introduction. Choose Left Align or press Ctrl+L.",
      "Compare the centred title with the straight left edge of the introduction."
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

export function Slide20() { return <LessonSlide lesson={lesson} /> }
