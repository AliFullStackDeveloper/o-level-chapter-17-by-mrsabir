import { LessonSlide } from '@/components/LessonSlide'
import type { Lesson } from '@/components/LessonSlide'

const lesson: Lesson = {
  "section": "17.2.5",
  "title": "Bulleted and numbered lists",
  "kind": "lists",
  "part": 0,
  "points": [
    "Bullets suit items that do not need a particular order, such as equipment.",
    "Numbering suits ordered steps, sequences or ranked items.",
    "Lists can have different bullet symbols, levels, marker positions and text indents.",
    "Use consistent line spacing and paragraph spacing across the list.",
    "Defined list styles help maintain the same formatting when items are added or edited."
  ],
  "practice": {
    "task": "Create square bullets for Laptop, Keyboard and Mouse. Nest Charger below Laptop at level 2.",
    "steps": [
      "Type Laptop, Keyboard and Mouse on separate paragraphs. Select all three.",
      "Open Home > Bullets dropdown > Define New Bullet > Symbol. Choose a filled square bullet and click OK.",
      "After Laptop press Enter and type Charger. Place the cursor in Charger and choose Increase Indent to make it level 2.",
      "If needed use Home > Multilevel List or Define New Multilevel List to set level 1 and level 2. Choose a smaller marker indent for level 1.",
      "Check that Charger is nested beneath Laptop while Keyboard and Mouse remain level 1."
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

export function Slide30() { return <LessonSlide lesson={lesson} /> }
