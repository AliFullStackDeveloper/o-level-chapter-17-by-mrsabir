import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.1",
  "title": "Page size and orientation",
  "kind": "orientation",
  "part": 1,
  "points": [
    "Page size describes the physical dimensions of the paper, such as A4 or A5.",
    "Portrait is taller than it is wide; landscape is wider than it is tall.",
    "Choose the size and orientation to suit the document and its audience.",
    "A report often suits portrait, while a wide timetable may suit landscape.",
    "Always check the settings; TXT files use defaults, while RTF and Word files can retain saved formatting."
  ],
  "practice": {
    "task": "Create an A4 timetable with enough width for several timetable columns. Choose an appropriate orientation.",
    "steps": [
      "Create a new document and type Timetable. Add a short timetable or sample text.",
      "Choose Layout > Size > A4.",
      "Choose Layout > Orientation > Landscape.",
      "Open File > Print. Check that the page is wider than it is tall and save."
    ]
  },
  "check": {
    "question": "Which orientation gives a wide timetable more room?",
    "choices": [
      "Portrait",
      "Landscape",
      "A smaller font only"
    ],
    "answer": 1,
    "explanation": "Landscape makes the page wider than it is tall."
  }
}

export function Slide03() { return <LessonSlide lesson={lesson} /> }
