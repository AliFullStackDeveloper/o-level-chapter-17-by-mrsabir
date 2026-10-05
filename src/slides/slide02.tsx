import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.1.1",
  "title": "Page size and orientation",
  "kind": "orientation",
  "part": 0,
  "points": [
    "Page size describes the physical dimensions of the paper, such as A4 or A5.",
    "Portrait is taller than it is wide; landscape is wider than it is tall.",
    "Choose the size and orientation to suit the document and its audience.",
    "A report often suits portrait, while a wide timetable may suit landscape.",
    "Always check the settings; TXT files use defaults, while RTF and Word files can retain saved formatting."
  ],
  "practice": {
    "task": "Create a school report on A4 portrait. What page size and orientation should you choose?",
    "steps": [
      "Open Word and create a blank document. Type a report title and one paragraph.",
      "Choose Layout > Size > A4.",
      "Choose Layout > Orientation > Portrait.",
      "Open File > Print to inspect the preview. The page should be taller than it is wide. Save the file."
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

export function Slide02() { return <LessonSlide lesson={lesson} /> }
