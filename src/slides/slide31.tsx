import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.5",
  "title": "Bulleted and numbered lists",
  "kind": "lists",
  "part": 1,
  "points": [
    "Bullets suit items that do not need a particular order, such as equipment.",
    "Numbering suits ordered steps, sequences or ranked items.",
    "Lists can have different bullet symbols, levels, marker positions and text indents.",
    "Use consistent line spacing and paragraph spacing across the list.",
    "Defined list styles help maintain the same formatting when items are added or edited."
  ],
  "practice": {
    "task": "Number Open Word, Enter text and Save file. Insert Check spelling before Save file and check that numbering updates.",
    "steps": [
      "Type Open Word, Enter text and Save file on separate paragraphs. Select all three.",
      "Choose Home > Numbering and select the 1, 2, 3 format.",
      "Place the cursor at the start of Save file, press Enter to create an item above it, then click that empty item and type Check spelling.",
      "Check that the four steps are numbered 1 to 4 and Save file becomes item 4."
    ]
  },
  "check": {
    "question": "Which list best represents ordered instructions?",
    "choices": [
      "Numbered",
      "Bulleted",
      "Plain spaces"
    ],
    "answer": 0,
    "explanation": "Numbers communicate a sequence and update as items change."
  }
}

export function Slide31() { return <LessonSlide lesson={lesson} /> }
